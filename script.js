const questions = [
    {
        Question: "আলিম এর ব্যাটা আরিফ কোথাকার জামাই",
        answers: [
            {text: "নিজের গ্রাম এর", correct: false},
            {text: "নানিদের গ্রাম এর", correct: false},
            {text: "নবিনাগর এর", correct: true},
            {text: "বিয়ে ই হবে না", correct: false},
        ]
    },
    {
        Question:"সানটু কি জন্য মোটা হছে না",
        answers: [
            {text: "শুধু ঘি খাবার জন্য ", correct: false},
            {text: "হাতের কাজ করার জন্য ", correct: false},
            {text: "টোটাল সিগারেট খাবার জন্য", correct: false},
            {text: "ডার্লিং এর অভাব", correct: true},
        ]
    },
    {
        Question:"বসির এর ব্যাটা মিসার কি এখন প্রেম এ জরিত",
        answers: [
            {text: "হব হব করছে", correct: false},
            {text: "হইয়া গেছে ", correct: true},
            {text: "না", correct: false},
            {text: " কোনো দিন হবে না", correct: false},
        ]
    },  
    {
        Question:"নিয়াজ কেন ছঞ্ছল নই",
        answers: [
            {text: "জিন গত", correct: false},
            {text: " আব্দুল্লাহ বিরি খাই বলে", correct: false},
            {text: " ক্ষেতিয়ার জামাই বলে ", correct: true},
            {text: " পানু দেখে না বলে", correct: false},
        ]
    }, 
    {
        Question:"জসিম মানে  রস-মালাই কি জন্য কেটারিং এর কাজ শিখছে",
        answers: [
            {text: " মৌসুমির বিয়ে টা ভাঙ্গার জন্য", correct: true}, 
            {text:  " নিজের বিয়াতে খরচ কমানর জন্য ", correct: false},
            {text: "  বন্ধুদের বিয়াতে খরচ কমানর জন্য  ", correct: false},
            {text: " হোটেল এ ফ্রীতে রাত কাটানোর জন্য", correct: false},
        ]
    }, 
    { 
        Question:"আসিফ কি পারবে এবার কাও কে পটাতে",
        answers: [
            {text: " ওর দাদু যত দিন বেছে আছে তত দিন পারবে না", correct: false}, 
            {text:  " হ্যাঁ অবশ্যই পারবে", correct: false},
            {text: "   কোন দিন পারবে না ", correct: true},
            {text: " ইতিহাস টা সবাই জেনে গেছে তাই পোটছে না", correct: false},
        ]
    }, 
    { 
        Question :"জারা জারা আজ কে বাদ গেলে তাদের  েক নিয়ে একদিন আলোচনা হবে",
        answers: [
            {text: " ওভি ,রনি ,আস্রফ ,রিয়ায ,কলিম ,সাহিল ,আমিরুল ,চন্দন  ,আর আমাদের ফিরিঙ্গি ভাই", correct: true}, 
            {text:  " গুড নাইট", correct: false},
            {text: "   আবার হবে ", correct: false},
            {text: " সবাই ভাল থেক", correct: false}, 
        ]
    }, 
];
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-button");
const nextButton = document.querySelector("#next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetSate();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.Question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });


}

function resetSate(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
        nextButton.Style.display = "none";
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetSate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionindex < questions.length){
        handleNextButton();
    }
})

 startQuiz();
