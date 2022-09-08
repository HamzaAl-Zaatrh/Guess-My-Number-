'use strict';

// Generate number ferst
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Emtye string is convert to zero number

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    // Display the currect number
    document.querySelector('.number').textContent = secretNumber;
    // Change color of the body to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is too high
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score--;

    // When guess is too low
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = '📉 Too Law!';
    score--;
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = '😢 You lost the game!';
  }
  // Display the new score
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
