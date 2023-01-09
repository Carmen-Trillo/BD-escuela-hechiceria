let playBtn=document.querySelector("#playBtn");
let sound= new Audio('./music/tarot.mp3');
playBtn.addEventListener('click', ()=>{
   console.log ( "hola prueba");
    sound.play();
});

