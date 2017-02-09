module.exports = `{
  "name": "giphy",
  "description": "",
  "version": "1.0.0",
  "repository": "",
  "oc": {
    "parameters: {
      "text": {
        "description": "Text to be used for the meme",
        "example": "wat",
        "default": "wat",
        "type": "string"
      },
      "q": {
        "description": "query to be used for giphy API",
        "example": "rain+sad",
        "default": "wat",
        "type": "string"
      }
    }
    "container": false,
    "files": {
      "static": ["css"],
      "data": "server.js",
      "template": {
        "src": "template.html",
        "type": "handlebars"
      }
    }
  },
  "dependencies": {
    "node-fetch": "^1.6.3"
  }
}
`
