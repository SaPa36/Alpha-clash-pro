function handleKeyUpEvent(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('1 point')
    }
    else{
        console.log('missed')
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
    showElementById('play-ground');
    continueGame();
}