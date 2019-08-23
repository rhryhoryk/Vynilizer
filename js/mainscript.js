// buttons
const playButton  = document.querySelector('.play');
const muteButton  = document.querySelector('.mute');
const prevButton  = document.querySelector('.prev');
const nextButton  = document.querySelector('.next');
// objects
const vinyl       = document.querySelector('.vinyl');
const pickup      = document.querySelector('.pickup');
// music
const audios      = document.querySelectorAll('.track-list__audio');
const songNames   = document.querySelectorAll('.track-list__item'); 
let index         = 0;

console.log(index);
console.log(audios);


nextButton.addEventListener('click', function() {
  if (index + 1 === songNames.length) {index = 0} else {index++};

  for(let i = 0; i < songNames.length; i++){
    songNames[i].classList.add('--unchosen');
  }
  songNames[index].classList.remove('--unchosen');
 
  if (index == 0) {
    audios[songNames.length-1].pause();
    } else {audios[index-1].pause();
  }
  playButton.style.backgroundImage = "url(./img/playButton.png)";
  vinyl.classList.remove('--vinylaised');
})

prevButton.addEventListener('click', function() {
  if (index == 0) {index = songNames.length-1} else {index--};

  for(let i = 0; i < songNames.length; i++){
    songNames[i].classList.add('--unchosen');
  }
  songNames[index].classList.remove('--unchosen');  

  if (index == songNames.length-1) {
    audios[0].pause()
    } else {audios[index+1].pause();
  }
  playButton.style.backgroundImage = "url(./img/playButton.png)";
  vinyl.classList.remove('--vinylaised');
})

muteButton.addEventListener('click', function () {
  if (audios[index].muted) {
    audios[index].muted = false;
    muteButton.style.backgroundImage = "url(./img/unmutedButton.png)";
  } else {audios[index].muted = true;
    muteButton.style.backgroundImage = "url(./img/mutedButton.png)";
  }

  if (pickup.classList.contains('--unpickupaised')) { 
    pickup.classList.remove('--unpickupaised');
  }

  if (pickup.classList.contains('--pickupaised')) {
    pickup.classList.remove('--pickupaised');
    pickup.classList.add('--unpickupaised');
  } else {pickup.classList.add('--pickupaised');}
});


playButton.addEventListener('click', function () {
  vinyl.classList.toggle('--vinylaised');

  if (audios[index].paused) {
    audios[index].muted = false;
    muteButton.style.backgroundImage = "url(./img/unmutedButton.png)";
    audios[index].play();
    playButton.style.backgroundImage = "url(./img/pauseButton.png)";
  } else {
    audios[index].pause();
    playButton.style.backgroundImage = "url(./img/playButton.png)";
  }

  if (vinyl.classList.contains('--vinylaised')) {
    pickup.classList.remove('--unpickupaised');
    pickup.classList.add('--pickupaised');
  }
 });