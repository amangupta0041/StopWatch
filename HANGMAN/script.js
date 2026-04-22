const words = ['javascript', 'hangman', 'html', 'coding', 'style'];
const chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(chosenWord.length).fill('_');
let wrongGuesses = 0;
let guessedLetters = [];

const hangmanStages = [
    '',
    ' O',
    ' O\n |',
    ' O\n/|',
    ' O\n/|\\',
    ' O\n/|\\\n/',
    ' O\n/|\\\n/ \\'
];

function updateHangman() {
    document.getElementById('hangman-drawing').innerText = hangmanStages[wrongGuesses];
    document.getElementById('word').innerText = guessedWord.join(' ');
    document.getElementById('guessed-letters').innerText = guessedLetters.length ? guessedLetters.join(', ') : 'None';
    document.getElementById('attempts-left').innerText = hangmanStages.length - 1 - wrongGuesses;
}

function makeGuess() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    document.getElementById('guess-input').value = '';
    if (!guess || guessedLetters.includes(guess) || wrongGuesses >= hangmanStages.length - 1) return;

    guessedLetters.push(guess);
    let correct = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === guess) {
            guessedWord[i] = guess;
            correct = true;
        }
    }

    if (!correct) wrongGuesses++;
    updateHangman();

    if (wrongGuesses >= hangmanStages.length - 1) {
        document.getElementById('message').innerText = `Game Over! The word was "${chosenWord}".`;
    } else if (!guessedWord.includes('_')) {
        document.getElementById('message').innerText = 'Congratulations! You won!';
    }
}

updateHangman();
