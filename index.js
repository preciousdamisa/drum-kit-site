var drumButtons = document.querySelectorAll('.drum');

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener('click', function(event) {
    const value = this.innerHTML;
    playSound(value);
    buttonAnimation(value);
  });
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  playSound(key);
  buttonAnimation(key);
});

function playSound(key) {
  let soundToPlay;

  switch (key) {
    case 'w':
      soundToPlay = new Audio('sounds/tom-1.mp3');
      break;
    case 'a':
      soundToPlay = new Audio('sounds/tom-2.mp3');
      break;
    case 's':
      soundToPlay = new Audio('sounds/tom-3.mp3');
      break;
    case 'd':
      soundToPlay = new Audio('sounds/tom-4.mp3');
      break;
    case 'j':
      soundToPlay = new Audio('sounds/snare.mp3');
      break;
    case 'k':
      soundToPlay = new Audio('sounds/crash.mp3');
      break;
    case 'l':
      soundToPlay = new Audio('sounds/kick-bass.mp3');
      break;
    default:
      console.log(buttonInerHTML);
  }

  soundToPlay.play();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
}
