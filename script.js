const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  }, {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  }, {
    question: 'Who is the President of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b'
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let res = undefined;
  answerEls.forEach((answerEl) => {
    if(answerEl.checked) {
      res = answerEl.id;
    }
  });
  return res;

}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if(answer) {
    if(answer === quizData[currentQuestion].correct){
      score++;
    }
    currentQuestion++;
    if(currentQuestion < quizData.length) {
      deselectAnswers();
      loadQuiz();
    }
    else {
      quiz.innerHTML = `
      <h2>You answered correctly to ${score} out of ${quizData.length} questions.</h2>
       <button onclick="location.reload()">Retake</button>
      `;
    }
  }
  
})
