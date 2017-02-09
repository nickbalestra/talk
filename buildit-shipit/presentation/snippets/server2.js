module.exports = `import fetch from 'node-fetch';

export const data = (context, callback) => {
  let { q, text } = context.params;
  fetch(\`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=$\{q\}\`)
    .then(res => res.json())
    .then(json => {
      callback(null, {
        text,
        imgUrl: json.data.image_url,
        staticPath: context.staticPath
      })
    })
}`
