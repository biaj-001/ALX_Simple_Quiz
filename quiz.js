function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if an option was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 4: Compare user's answer with the correct answer
        const feedbackElement = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case when no option is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Step 5: Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
