let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    let feedback = '';

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback = 'Please enter a valid number between 1 and 100.';
    } else if (guess > targetNumber) {
        feedback = 'Too high! Try again.';
    } else if (guess < targetNumber) {
        feedback = 'Too low! Try again.';
    } else {
        feedback = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('guessInput').disabled = true;
        document.querySelector('button').disabled = true;
    }

    document.getElementById('feedback').textContent = feedback;
}
