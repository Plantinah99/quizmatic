const startQuizButton = document.getElementById('start-quiz');
const homePage = document.getElementById('home-page');
const quizPage = document.getElementById('quiz-page');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const feedbackElement = document.getElementById('feedback');

let currentQuestion;
let score = 0;
let questionCount = 0;

startQuizButton.addEventListener('click', startQuiz);

function startQuiz() {
    homePage.style.display = 'none';
    quizPage.style.display = 'block';
    score = 0;
    questionCount = 0;
    showNextQuestion();
}

function showNextQuestion() {
    currentQuestion = generateQuestion();
    questionCount++;
    questionElement.textContent = `Question ${questionCount}: ${currentQuestion.question}`;
    answersElement.innerHTML = '';
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersElement.appendChild(button);
    });

    feedbackElement.textContent = '';
}

function checkAnswer(answerIndex) {
    if (answerIndex === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = `Correct! You're a math wizard! Score: ${score}/${questionCount}`;
        setTimeout(showNextQuestion, 1500);
    } else {
        const funnyRemarks = [
            "Oops! Math called, it wants its correct answer back.",
            "Close, but no calculator!",
            "That answer is as wrong as a pizza with pineapple.",
            "Nice try, but even a potato would disagree.",
            "Looks like someone skipped math class to become a comedian!"
        ];
        const randomRemark = funnyRemarks[Math.floor(Math.random() * funnyRemarks.length)];
        feedbackElement.textContent = `${randomRemark} Try again!`;
    }
}
