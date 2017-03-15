const input = new Promise((resolve, reject) => document
  .querySelector('.google-input')
  .addEventListener('input', e => resolve(e))
)