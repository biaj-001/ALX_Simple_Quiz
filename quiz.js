function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if the user selected an option
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 4: Compare the user's answer to the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Step 5: Handle the case when no option is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Step 6: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

