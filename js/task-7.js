const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputSize.addEventListener('input', () => {
  text.style.fontSize = event.currentTarget.value + 'px';
});
