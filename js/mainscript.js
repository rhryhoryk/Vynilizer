// buttons
let playButton  = document.querySelector('.play');
let updownButton= document.querySelector('.pickup-up-down');
// objects
let vinyl       = document.querySelector('.vinyl');
let pickup      = document.querySelector('.pickup')



updownButton.addEventListener('click', function () {

  if (pickup.classList.contains('--unpickupaised')) { 
    pickup.classList.remove('--unpickupaised')
  }

  if (pickup.classList.contains('--pickupaised')) {
    pickup.classList.remove('--pickupaised');
    pickup.classList.add('--unpickupaised');
  } else {pickup.classList.add('--pickupaised');}
})

playButton.addEventListener('click', function () {
  vinyl.classList.toggle('--vinylaised')
  
  if (vinyl.classList.contains('--vinylaised')) {
    pickup.classList.remove('--unpickupaised');
    pickup.classList.add('--pickupaised');
  }
 })