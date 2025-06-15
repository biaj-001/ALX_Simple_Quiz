function checkAnswer(){
    //  identify the correct answer 

    const correctAnswer = "4";

    // retrieve the user's answer

    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;


    // compare the user's answer with the correct Answer

    if(userAnswer === correctAnswer){
        document.getElementById("feedback").textContent = "Correct! Well done."
    }else{
         document.getElementById("feedback").textContent = "That's incorrect. Try again!"
    }
}

document.getElementById('submit-answer').addEventListener('click',checkAnswer);
