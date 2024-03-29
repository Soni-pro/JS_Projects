const questions = [
    {
        question:"Which is largest animal in the worls?",
        answers:[
            { text: "Shark" , correct: false},
            { text: "Blue Whale" , correct: true},
            { text: "Elephant" , correct: false},
            { text: "Giraffe" , correct: false},
        ]
    },
    {
        question:"Which is smaalest continent in the worls?",
        answers:[
            { text: "Asia" , correct: false},
            { text: "Australia" , correct: true},
            { text: "Arctic" , correct: false},
            { text: "Africa" , correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){ 
    let currentQuestion = questions[currentQuestionIndex];
    let questionsNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionsNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    })
}

startQuiz();