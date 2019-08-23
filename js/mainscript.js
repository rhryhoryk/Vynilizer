// buttons
const playButton  = document.querySelector('.play');
const updownButton= document.querySelector('.pickup-up-down');
// objects
const vinyl       = document.querySelector('.vinyl');
const pickup      = document.querySelector('.pickup');
// music
const audio       = document.querySelectorAll('.track-list__audio');

console.log(audio);



updownButton.addEventListener('click', function () {
  if (audio[0].muted) {
    audio[0].muted = false;
  } else {audio[0].muted = true;}
  
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

  if (audio[0].paused) {
    audio[0].play();
  } else {audio[0].pause();}

  
  
  if (vinyl.classList.contains('--vinylaised')) {
    pickup.classList.remove('--unpickupaised');
    pickup.classList.add('--pickupaised');
  }
 });