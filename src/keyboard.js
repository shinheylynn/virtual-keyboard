

const input = document.querySelector('#input-line input');

function updateInput(value) {
  input.value += value;
}

// 마우스 클릭 시 Input 값 변경

function handleKeyClick(event) {
  const keyVal = event.target.getAttribute('data-val');
  updateInput(keyVal);
}

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', handleKeyClick);
})

// 키보드 입력 시 Input 값 변경

const keyPressed = {};

function handleKeyPress(event) {
  if (!keyPressed[event.key]) {
    keyPressed[event.key] = true;
    const key = document.querySelector(`.key[data-code="Key${event.key.toUpperCase()}"]`);
    if (key) {
      key.style.backgroundColor = 'black';
      updateInput(key.getAttribute('data-val'));
    }
  }
}

function handleKeyRelease(event) {
  keyPressed[event.key] = false;
  const key = document.querySelector(`.key[data-code="Key${event.key.toUpperCase()}"]`);
  if (key) {
    key.style.backgroundColor = '';
  }
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);

// mode-switch-button

document.querySelector('.mode-switch-button button').addEventListener('click', function() {
  this.classList.toggle('active');
  document.body.classList.toggle('dark-mode');
})