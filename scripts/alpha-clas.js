function handleKeyUpEvent(event){
    const playerPressed = event.key;
    
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if(playerPressed === expectedAlphabet){
        // // get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // update score
        // const newScore = currentScore + 1;

        // // show score
        // currentScoreElement.innerText = newScore;

        const currentScore = getTextElementById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        //  // get current Life
        //  const currentLifeElement = document.getElementById('current-life');
        //  const currentLifeText = currentLifeElement.innerText;
        //  const currentLife = parseInt(currentLifeText);
 
        //  // update score
        //  const newLife = currentLife - 1;
 
        //  // show score
        //  currentLifeElement.innerText = newLife;

        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }
}


document.addEventListener('keyup',handleKeyUpEvent);

function continueGame(){
    const randomAlphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = randomAlphabet;

    // set background color
    setBackgroundColorById(randomAlphabet);

}

function playNow(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    

    setTextElementById('current-score', 0);
    setTextElementById('current-life', 5);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementById('current-score');
    setTextElementById('last-score', lastScore);
    // clear the last selected alphabet highlight

    const currentAlphabet = getElementTextByIdSpecific('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}