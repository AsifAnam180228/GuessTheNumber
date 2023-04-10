'use strict';

console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '✅' +
  'correct number!';



const secretNumber = Math.trunc(Math.random()*20)+1
let score = 20
document.querySelector('.number').textContent = secretNumber
document.querySelector('.check').addEventListener
('click', function(){
const guess = Number(document.querySelector('.guess').value)
  console.log(typeof  guess)

  if(!guess){
    document.querySelector('.message').textContent = 'no number'
    score--
    document.querySelector('.score').textContent = score
  }
  else if(guess === secretNumber){
    document.querySelector('.message').textContent =
      'Correct Number!'
    document.querySelector('.number').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.score').textContent = score

  }
  else if(guess > secretNumber){
    if(score>0){
      document.querySelector('.message').textContent =
        'Too high!'
      score--
      document.querySelector('.score').textContent = score

    }
    else {
      document.querySelector('.message').textContent =
        'You lost the game!'
    }

  }
  else if(guess < secretNumber){
    if(score>0){
      document.querySelector('.message').textContent =
        'Too low!'
      score--
      document.querySelector('.score').textContent = score

    }
    else {
      document.querySelector('.message').textContent =
        'You lost the game!'
    }

  }
})