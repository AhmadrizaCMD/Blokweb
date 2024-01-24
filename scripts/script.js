// JavaScript Document

const eersteA = document.querySelector("main section:nth-of-type(2) nav li:nth-of-type(1) a");
const tweedeA = document.querySelector("main section:nth-of-type(2) nav li:nth-of-type(2) a");
const derdeA = document.querySelector("main section:nth-of-type(2) nav li:nth-of-type(3) a");
const carNaam = document.querySelector("main section:nth-of-type(2) h3");
const carP = document.querySelector("main section:nth-of-type(2) p");

eersteA.onclick = toonEersteA;
tweedeA.onclick = toonTweedeA;
derdeA.onclick = toonDerdeA;

function toonTweedeA(e){
  carNaam.textContent = "Green LAMBO";
  carP.textContent = "faster than fast";
}

function toonEersteA(e){
  carNaam.textContent = "Black LAMBO";
  carP.textContent = "your nextr car";
}

function toonDerdeA(e){
  carNaam.textContent = "Ornage LAMBO";
  carP.textContent = "new live";
}


const playButton = document.querySelector("main section:nth-of-type(1) button");
const theVideo = document.querySelector("main section:nth-of-type(1) video");

playButton.onclick = toggleVideo;

function toggleVideo(e){
  if(theVideo.paused == true){
    theVideo.play();
  }
  else{
    theVideo.pause();
  }
}