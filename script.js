const questions = [
    { question: "2 + 2 = ?", options: [3, 4, 5, 6], answer: 4 },
    { question: "7 - 3 = ?", options: [2, 3, 4, 5], answer: 4 },
    { question: "3 * 4 = ?", options: [10, 11, 12, 13], answer: 12 },
    { question: "15 / 3 = ?", options: [3, 4, 5, 6], answer: 5 },
];

const sarcasmResponses = [
    "Oh, come on! Even my grandma's calculator can do better than that!",
    "Are you sure you passed kindergarten math?",
    "I've seen snails solve this faster. Try again, speedy!",
    "Wrong answer. But hey, at least you're consistent!",
    "Nope! Maybe you should ask your pet rock for help?",
];

let currentQuestion = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    if (selectedAnswer === question.answer) {
        document.getElementById("feedback").textContent = "Correct! Moving to the next question.";
        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(displayQuestion, 1000);
        } else {
            document.getElementById("question").textContent = "Congratulations! You've completed all questions.";
            document.getElementById("options").innerHTML = "";
        }
    } else {
        const sarcasm = sarcasmResponses[Math.floor(Math.random() * sarcasmResponses.length)];
        document.getElementById("feedback").textContent = sarcasm;
    }
}

displayQuestion();
