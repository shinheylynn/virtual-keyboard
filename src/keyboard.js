

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

// font select-box

document.addEventListener('DOMContentLoaded', function() {
  const selectBox = document.querySelector('.font__select-box');
  const selectedFontSpan = document.querySelector('.font__selected-font');

  // 선택 상자 클릭 이벤트
  document.querySelector('.font__selected-font').addEventListener('click', function() {
      selectBox.classList.toggle('active');
  });

  // 리스트 항목 클릭 이벤트
  selectBox.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', function() {
          const fontValue = this.getAttribute('data-value');
          const fontText = this.textContent;

          if (document.body.className.includes('dark-mode')) {
            document.body.className = 'dark-mode ' + fontValue;
          } else { document.body.className = fontValue };

          selectedFontSpan.textContent = fontText; // .font__selected-font 요소의 텍스트 변경
          
          selectBox.classList.remove('active'); // 리스트 숨김
      });
  });

  // 외부 클릭 감지하여 리스트 숨기기
  document.addEventListener('click', function(event) {
      if (!selectBox.contains(event.target) && !event.target.matches('.font__selected-font')) {
          selectBox.classList.remove('active');
      }
  });
});
