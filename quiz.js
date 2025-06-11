// 
// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Check if any option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 5: Compare the answer and give feedback
        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Step 6: If no option selected, prompt user
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Step 7: Add click event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

