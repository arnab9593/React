// script.js

// Define variables for DOM elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('options');
const timerElement = document.getElementById('time-left');
const scoreElement = document.getElementById('current-score');
const nextButton = document.getElementById('next-button');

// Define the quiz data
const quizData = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is 1+1?',
        answers: ['2', '1', '3', '4'],
        correctAnswer: '2',
    }    
];

// Add your js code here