function checkAnswer(){
    //  identify the correct answer 

    const correctAnswer = "4";


     const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');

    // retrieve the user's answer
    let userAnswer = "";
    
    if(selectedRadioButton){
        userAnswer=selectedRadioButton.value;
    }

    // compare the user's answer with the correct Answer

    const feedbackElement = document.getElementById('feedback');


    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;


    // compare the user's answer with the correct Answer

    if(userAnswer === correctAnswer){
        
          feedbackElement.textContent="correct!Well done";
    }else{
        feedbackElement.textContent="That's incorrect . Try again !"
    }
}

document.getElementById('submit-answer').addEventListener('click',checkAnswer);
