'use strict';

/*
document.querySelector('.message').textContent = ;
document.querySelector('.number').textContent = ;
document.querySelector('.score').textContent = ;
document.querySelector('.guess').value = ;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// display message function
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// reset game function
const resetGame = () => {
  document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Tente adivinhar...');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
};

// implementar lógica do jogo
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ Nenhum Número!');

    // quando jogador ganha
  } else if (guess === secretNumber) {
    displayMessage('🎉 Você acertou!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //quando número está errado
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Muito alto!' : '📉  Muito baixo!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Você perdeu!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

resetGame();
