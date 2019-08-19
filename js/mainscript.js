let playButton  = document.querySelector('.play');
let vinyl       = document.querySelector('.vinyl');
let pickup      = document.querySelector('.pickup')


playButton.addEventListener('click', function () {
  // vinyl.classList.toggle('--vinylaised')
  if (vinyl.classList.contains('--vinylaised')) { vinyl.classList.remove('--vinylaised')}
  else {vinyl.classList.add('--vinylaised');}
  pickup.classList.add('--pickupaised')
 })