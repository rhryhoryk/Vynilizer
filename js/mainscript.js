let playButton = document.querySelector('.play');
let vinyl = document.querySelector('.vinyl');
playButton.addEventListener('click', function () {
    // vinyl.classList.toggle('--vinylaised')
    if (vinyl.classList.contains('--vinylaised')) { vinyl.classList.remove('--vinylaised')}
    else {vinyl.classList.add('--vinylaised');}
 })