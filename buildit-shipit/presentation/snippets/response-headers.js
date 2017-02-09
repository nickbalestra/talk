module.exports = `export const data = (ctx, callback) => {
  ctx.setHeader('Cache-Control', 'public, max-age=31536000')
  callback(null, { a: 1 });
}`;