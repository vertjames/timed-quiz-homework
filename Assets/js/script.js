$(document).ready(() => { 
// Insert instructions & questions into the mainDivContent area:
document.getElementById('mainDivContent').innerHTML = `
  <h1>Coding Quiz Challenge</h1>
  <p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!</p>
  <button id="startButton" type="button" class="btn btn-primary btn-lg">Start Quiz</button>
`

// Insert timer into timer div:
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// MAKE QUESTIONS AN OBJECT, and ANSWERS AN ARRAY (within the object? I think so)
const quizQuestions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    answer: 2
  },
  {
    question: 'The condition in an if/else statement is enclosed within _______.',
    choices: ['1. quotes', '2. curly braces', '3. parenthses', '4. square brackets'],
    answer: 2
  },
  {
    question: 'Arrays in JavaScript can be used to store ________.',
    choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    answer: 3
  },
  {
    question: 'String values must be enclosed within ________ when being assigned to variables.',
    choices: ['1. commas', '2. curly braces', '3. quotes', '4. parentheses'],
    answer: 3
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console log'],
    answer: 3
  }
]

// Load the first question first:
let currentQuestionIndex = 0

// addEventListener for when the startButton is clicked to start the timer and load the first question:
document.getElementById('startButton').addEventListener('click', () => {
  // This starts the timer:
  let startingTime = 75
  display = document.querySelector('#timer')
  startTimer(startingTime, display)

  // Load the next question: 
  const loadQuestion = () => {
    let nextQuestion = document.createElement('div')
    nextQuestion.innerHTML = `
      <h1>${quizQuestions[currentQuestionIndex].question}</h1>
      <p></p>
      <div id="choiceClick">
        <p><button type="button" class="btn btn-info">${quizQuestions[currentQuestionIndex].choices[0]}</button></p>
        <p><button type="button" class="btn btn-info">${quizQuestions[currentQuestionIndex].choices[1]}</button></p>
        <p><button type="button" class="btn btn-info">${quizQuestions[currentQuestionIndex].choices[2]}</button></p>
        <p><button type="button" class="btn btn-info">${quizQuestions[currentQuestionIndex].choices[3]}</button></p>
      </div>
      `
    if (document.getElementById('mainDivContent')) {
    document.getElementById('mainDivContent').replaceWith(nextQuestion)
    
    
    // Listen for a click on any of the choice buttons:
      document.getElementById('choiceClick').addEventListener('click', () => {
      let currentObject = quizQuestions[currentQuestionIndex]

      // If the correct button is clicked then display 'Correct!' and move to next question(call the loadQuestion function):
      if (event.target.textContent === currentObject.choices[currentObject.answer]) {
        document.getElementById('choiceClick').append('Correct!')
        setTimeout(() => {
          loadQuestion() 
        }, 1000);
        
      }
      })
     }
    }
    loadQuestion ()
})


// let listenForClick = document.getElementById('choiceClick').addEventListener('click', () => {
//   console.log('clicked')
//   /
//   // if (${quizQuestions[currentQuestionIndex].choices[0]}) {

//   //   } 
//   // // If an incorrect button is clicked then display 'Incorrect!', subtract 10 seconds from the timer, and move to the next question (call the loadQuestion function):
//   //   else {

//   //   }
// })

})


