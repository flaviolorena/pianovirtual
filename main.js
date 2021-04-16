// pegar todas as teclas 
const keys = document.querySelectorAll(".key")
// tocar notas 
function playNote(event) {
    let audioKeyCode = getKeyCode(event)
    // tecla pressionada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    //se a tecla existe
    const isKeyExists = key
    //exibe as teclas apertadas
    console.log(isKeyExists)
    if(!isKeyExists){
        return
    }
    // toca audio e add estilo de classe
    playAudio(audioKeyCode)
    addPlayingClass(key)
}
function addPlayingClass(key){
    key.classList.toggle('playing')
}

// pega a tecla pressionada
function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === "keydown"
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}

//toca o audio 
function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}
// remove estilo de classe
function removePlayingClass(event){
    event.target.classList.remove("playing")
}
// clicar com mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

// digitar no teclado
window.addEventListener("keydown", playNote)