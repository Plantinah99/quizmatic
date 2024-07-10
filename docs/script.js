// app.js

import { getQuestions, submitAnswer } from './api.js';

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Math quiz functionality
async function loadQuestions() {
    try {
        const questions = await getQuestions();
        displayQuestions(questions);
    } catch (error) {
        console.error('Error loading questions:', error);
    }
}

async function handleSubmit(questionId, answer) {
    try {
        const result = await submitAnswer(questionId, answer);
        displayResult(result);
    } catch (error) {
        console.error('Error submitting answer:', error);
    }
}

// Functions to update the UI
function displayQuestions(questions) {
    // Update your UI to show the questions
    console.log('Questions loaded:', questions);
    // TODO: Implement this function to display questions in your UI
}

function displayResult(result) {
    // Update your UI to show if the answer was correct
    console.log('Answer result:', result);
    // TODO: Implement this function to display the result in your UI
}

// Call loadQuestions when the page loads
document.addEventListener('DOMContentLoaded', loadQuestions);
