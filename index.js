
const sons = 
    {A: './sounds/boom.wav',
    S: './sounds/clap.wav',
    D: './sounds/hihat.wav',
    F: './sounds/kick.wav',
    G: './sounds/openhat.wav',   
    H: './sounds/ride.wav',
    J: './sounds/snare.wav',
    K: './sounds/tink.wav',
    L: './sounds/tom.wav'}
    
let audio = document.querySelector('#audio');
let letraDiv = document.querySelectorAll('#letra');

const regex = ({key})=>{
let letter = key.toUpperCase()
let letra = letter.match(/[asdfghjkl]+/gi);
trataLetra(letra);
adicionarEfeito(letter)
removerEfeito()
}

const trataLetra=(letra)=>{
    audio.src=sons[letra]
    audio.play()
}
const adicionarEfeito = (letter)=>{
 let ltraRecebida = letraDiv
    for(let i of ltraRecebida){
        if(i.textContent===letter){
           i.classList.add('active')
    }
}
}
const removerEfeito = ()=>{
const remove = ()=>  letraDiv.forEach((div)=>{ div.classList.remove('active')});
for(let i = 0; i<9; i++){
letraDiv[i].addEventListener('transitionend', remove)
}
}
window.addEventListener('keypress', regex)