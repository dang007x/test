//Hello Dice game

let scores, roundScore, activePlayer, timeToRoll, gameOver;

init();

//document.querySelector("#current-" + activePlayer).textContent = roundScore;
//document.querySelector("#current-" + activePlayer).innerHTML = `<strong>${roundScore}</strong>` 

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(!gameOver) {
        //random dice
        let diceOne = Math.floor(Math.random() * 6) + 1;
        let diceTwo = Math.floor(Math.random() * 6) + 1;

        //change image by random dice
        // let diceDom = document.querySelector('.dice');
        // diceDom.style.display = 'block';

        let diceP1 = document.getElementById('dice-1');
        let diceP2 = document.getElementById('dice-2');
        diceP1.src = 'img/dice-' + diceOne + '.png';
        diceP2.src = 'img/dice-' + diceTwo + '.png';

        //change player
        
        if(timeToRoll !== 0) {
            roundScore += diceOne + diceTwo;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] -=- (diceOne + diceTwo);

            if(scores[activePlayer] >= 100) {
                gameOver = true;
                document.getElementById('dice-1').style.display = 'none';
                document.getElementById('dice-2').style.display = 'none';
                document.querySelector('#name-' + activePlayer).textContent = 'WINNER |^.^|';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            }

            timeToRoll--;
        }
        else {
            active();
            timeToRoll = 3;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(!gameOver){
        if(timeToRoll < 3) {
            timeToRoll = 3;
        }
        active();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameOver = false;
    timeToRoll = 3;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}

function active() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector("#current-0").textContent = '0';
    document.querySelector("#current-1").textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

console.log(scores);