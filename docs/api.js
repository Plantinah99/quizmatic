// api.js

const API_BASE_URL = 'http://127.0.0.1:5000/api';

export async function getQuestions() {
    const response = await fetch(`${API_BASE_URL}/questions`);
    if (!response.ok) {
        throw new Error('Failed to fetch questions');
    }
    return response.json();
}

export async function submitAnswer(questionId, answer) {
    const response = await fetch(`${API_BASE_URL}/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: questionId, answer: answer }),
    });
    if (!response.ok) {
        throw new Error('Failed to submit answer');
    }
    return response.json();
}
