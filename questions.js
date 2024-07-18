const OPERATIONS = ['+', '-', '*', '/'];

function generateQuestion() {
    const operation = OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];
    let num1, num2, answer;

    switch (operation) {
        case '+':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 50) + 26; // Ensure num1 > num2
            num2 = Math.floor(Math.random() * 25) + 1;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            answer = num1 * num2;
            break;
        case '/':
            num2 = Math.floor(Math.random() * 12) + 1;
            answer = Math.floor(Math.random() * 12) + 1;
            num1 = num2 * answer;
            break;
    }

    const question = `What is ${num1} ${operation} ${num2}?`;
    const answers = generateAnswers(answer);
    const correctAnswerIndex = answers.indexOf(answer.toString());

    return {
        question,
        answers,
        correctAnswer: correctAnswerIndex
    };
}

function generateAnswers(correctAnswer) {
    const answers = [correctAnswer.toString()];
    while (answers.length < 4) {
        const wrongAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5;
        if (wrongAnswer !== correctAnswer && !answers.includes(wrongAnswer.toString())) {
            answers.push(wrongAnswer.toString());
        }
    }
    return shuffleArray(answers);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
