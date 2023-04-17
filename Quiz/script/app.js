const quizData = [
    {
    question: 'what is the capital of nepal ?',
    a: 'london',
    b: 'paris',
    c: 'madrid',
    d: 'berlin',
    correct: 'b'
},
{
    question: 'what is the largest country in the world',
    a: 'china',
    b: 'paris',
    c: 'russia',
    d: 'india', 
    correct: 'c'
},
{
    question: 'what is the smallest country in the world',
    a: 'monaco',
    b: 'maldives', 
    c: 'vatican city', 
    d: 'liechtenstain',
    correct: 'c'
},
{
    question: 'what is the highest mountain in the world',
    a: 'everest',
    b: 'K2',
    c: 'kilimanjaro',
    d: 'Denali',
    correct: 'd'

},
{
    question: 'what is the highest mountain in the world',
    a: 'everest',
    b: 'K2',
    c: 'kilimanjaro',
    d: 'Denali',
    correct: 'd'
}

];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');

let currentQuestion = 0;
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;



const loadQuestion = () =>{
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
loadQuestion();

const getSelected = () =>{
    const answerEls = document.getElementsByName('answer');
    let answer = undefined;
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.value;
        }
    });
    return answer;

}

function deselectAnswer(){
    const answerEls = document.getElementsByName('answer');
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
            scoreEl.innerText = score;
            if(score> highscore){
                highscore = score;
                highscoreEl.innerText = highscore;
                localStorage.setItem('highscore', highscore)
            }
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuestion();
            deselectAnswer();
        }else{
            quiz.innerHTML = `<h2> you answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()"> play Again</button>`;
        }
    }
});



