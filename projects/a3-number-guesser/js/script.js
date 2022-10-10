var target = (Math.floor(Math.random() * 11));
var inputBox = document.querySelector('.inputBox');
var lives = document.querySelector('.lives');
var hint = document.querySelector('.hint')
var button = document.querySelector('.try-btn');
var chance = 3
button.addEventListener('click', playGame);

function playGame(e) {
    var guess = inputBox.value;
    guess = parseInt(guess);

    if (guess > 10 || guess < 0) {
        hint.textContent = `You can't even count!! Game over.`;
        button.textContent = 'Play again';
        inputBox.disabled = true;
        inputBox.style.display = 'none';
        button.addEventListener('click', reload);
    }
    else if (guess == target) {
        winGame();
    } else { compareGuess(guess) }
}
function compareGuess(guess) {
    if (guess > target) {
        if (chance == 1 || chance < 1) {
            lostGame();
        } else {
            chance--;
            lives.textContent = (`${chance}`);
            hint.textContent = ("SMALLER");
            inputBox.value = "";
            inputBox.focus();
        }
    } else {
        if (chance == 1 || chance < 1) {
            lostGame();
        } else {
            chance--;
            lives.textContent = (`${chance}`);
            hint.textContent = ("BIGGER");
            inputBox.value = '';
            inputBox.focus();
        }
    }
}

function reload() {
    hint.textContent = `LOADING!`;
    console.log("Loading!");
    lives.textContent = 'LOADING!'
    button.textContent = 'LOADING!';
    inputBox.disabled = true;
    inputBox.style.display = 'none';
    window.location.reload();
}

function lostGame() {

    hint.textContent = `LOST!! Correct answer is ${target}`;
    console.log("You Lose");
    lives.textContent = 'RIP'
    button.textContent = 'play again';
    inputBox.disabled = true;
    inputBox.style.display = 'none';
    button.addEventListener('click', reload);

}

function winGame() {

    hint.textContent = `Congrats!! You Win!!`;
    console.log("You Win");
    lives.textContent = 'LONG LIVE'
    button.textContent = 'play Again';
    inputBox.disabled = true;
    inputBox.style.display = 'none';
    button.addEventListener('click', reload);
}