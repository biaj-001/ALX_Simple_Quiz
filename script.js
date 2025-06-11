// 
function checkAnswer(){
    //  identify the correct answer 

    const correctAnswer = "4";

    // retrieve the user's answer

    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = "";
    if(selectedRadioButton){
        userAnswer=selectedRadioButton.value;
    }

    // compare the user's answer with the correct Answer

    const feedbackElement = document.getElementById('feedback');

    if(userAnswer === correctAnswer){
        feedbackElement.textContent="correct!Well done";
    }else{
        feedbackElement.textContent="That's incorrect . Try again !"
    }
}

const SubmitButton = document.getElementById('submit-answer');
SubmitButton.addEventListener('click',checkAnswer);
