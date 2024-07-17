const operations = ['+', '-', '*', '/'];
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

let currentQuestion;
let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];

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

    return { question, answer };
}

function displayQuestion() {
    const questionData = generateQuestion();
    currentQuestion = questionData.question;
    correctAnswer = questionData.answer;

    document.getElementById("question").textContent = currentQuestion;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    const options = [correctAnswer];
    while (options.length < 4) {
        const wrongAnswer = Math.floor(Math.random() * 40) - 10;
        if (!options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }

    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Moving to the next question.";
        setTimeout(displayQuestion, 1000);
    } else {
        const sarcasm = sarcasmResponses[Math.floor(Math.random() * sarcasmResponses.length)];
        document.getElementById("feedback").textContent = sarcasm;
    }
}

displayQuestion();
