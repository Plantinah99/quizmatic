console.log("Script execution started");

const operations = ['+', '-', '*', '/'];
console.log("Operations:", operations);

const sarcasmResponses = [
    "Oh, come on! Even my grandma's calculator can do better than that!",
    "Are you sure you passed kindergarten math?",
    "I've seen snails solve this faster. Try again, speedy!",
    "Wrong answer. But hey, at least you're consistent!",
    "Nope! Maybe you should ask your pet rock for help?",
    "come on now, please focus"
    "please be serious"
    "you can do better than that"
    "give it a go once more"
    "are you a 4th grader?"
    "Iyohhhh bathong!"
    "bathong wena?!"
    "where in the world is that correct?"
    "O tswa kae re seke raya teng?"
    "Ao bathong ruri"
    "Welele inganekwane!"
    "ifilm keh le"
    "senga give up kuwena mbhem"
    "wa zikhipha kimi!"
    "asiyeke once mbhem'"
];
console.log("Sarcasm responses loaded:", sarcasmResponses.length);

let currentQuestion;
let correctAnswer;

function generateQuestion() {
    console.log("Generating new question");
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    console.log(`Numbers generated: ${num1} and ${num2}, Operation: ${operation}`);

    let question, answer;

    switch (operation) {
        case '+':
            question = `${num1} + ${num2} = ?`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2} = ?`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2} = ?`;
            answer = num1 * num2;
            break;
        case '/':
            answer = Math.floor(num1 / num2);
            question = `${num1 * answer} / ${num1} = ?`;
            break;
    }

    console.log(`Question generated: ${question}, Answer: ${answer}`);
    return { question, answer };
}

function displayQuestion() {
    console.log("Displaying question");
    const questionData = generateQuestion();
    currentQuestion = questionData.question;
    correctAnswer = questionData.answer;

    const questionElement = document.getElementById("question");
    if (questionElement) {
        questionElement.textContent = currentQuestion;
        console.log("Question displayed in DOM");
    } else {
        console.error("Question element not found in DOM");
    }

    const optionsContainer = document.getElementById("options");
    if (optionsContainer) {
        optionsContainer.innerHTML = "";
        console.log("Options container cleared");

        const options = [correctAnswer];
        while (options.length < 4) {
            const wrongAnswer = Math.floor(Math.random() * 40) - 10;
            if (!options.includes(wrongAnswer)) {
                options.push(wrongAnswer);
            }
        }

        options.sort(() => Math.random() - 0.5);
        console.log("Options generated:", options);

        options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });
        console.log("Option buttons added to DOM");
    } else {
        console.error("Options container not found in DOM");
    }
}

function checkAnswer(selectedAnswer) {
    console.log(`Checking answer. Selected: ${selectedAnswer}, Correct: ${correctAnswer}`);
    const feedbackElement = document.getElementById("feedback");
    
    if (feedbackElement) {
        if (selectedAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Moving to the next question.";
            console.log("Correct answer given");
            setTimeout(() => {
                console.log("Generating next question after delay");
                displayQuestion();
            }, 1000);
        } else {
            const sarcasm = sarcasmResponses[Math.floor(Math.random() * sarcasmResponses.length)];
            feedbackElement.textContent = sarcasm;
            console.log("Incorrect answer. Sarcasm displayed:", sarcasm);
        }
    } else {
        console.error("Feedback element not found in DOM");
    }
}

console.log("Setting up initial question");
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded");
    displayQuestion();
});

console.log("Script execution completed");
