module.exports = `export const data = (ctx, callback) => {
  ctx.renderComponent('my-nested-component', {
  	parameters: { a: 1 },
  	headers: ctx.requestHeaders,
  	version: '1.x.x'
  }, (err, nested) => {
  	callback(err, { nested });
  });
}`;