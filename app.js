// if dice is 6 add the score to lastRole, if the round score is = to 12 then it's the next players turn.


let score, roundScores, activePlayer, dice, gamePlaying, lastRoll;

alert(`Rules; Enter your winning score, or the default will be 100.
if you roll two 6's side by side you'll lose your global score. if roll a snake eye, you'll lose your chain points & forfeit your turn.
but most importantly, I hope you enjoy it :)`);

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
if (gamePlaying) {
let dice = Math.floor(Math.random() * 6) + 1;

let diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';

if (dice === 6 && lastRole === 6){
score[activePlayer] = 0;
document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
nextPlayer();	
} else if (dice !== 1) {
roundScores += dice;   
document.querySelector('#current-' + activePlayer).textContent = roundScores; 
} else {
nextPlayer();
  }
lastRole = dice;
 }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
if (gamePlaying){
score[activePlayer] += roundScores;
// update UI.
document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
const input = document.querySelector('#userScore').value;

if (input){
	winningScore = input;
} else{
	winningScore = 100;
}

if( score[activePlayer] >= winningScore ){
document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
document.querySelector('.dice').style.display = 'none';
document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
gamePlaying = false;
} else {
nextPlayer();
  }
 }
});

function nextPlayer() {
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
roundScores = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

// document.queryselector('.player-0-panel').classList.remove('active');
// document.queryselector('.player-1-panel').classList.add('active');
document.querySelector('.dice').style.display = 'none';

};

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
score = [0, 0];
roundScores = 0;
activePlayer = 0;
gamePlaying = true;
lastRoll = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');


};