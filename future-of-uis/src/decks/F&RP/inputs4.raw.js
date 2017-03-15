const stream = fromEvent(
  document.querySelector('.google-input'),
  'input'
)
.map(e => e.target.value)