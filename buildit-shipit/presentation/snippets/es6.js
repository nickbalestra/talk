module.exports = `import { fileContent } from './file'

export const data = (ctx, callback) => {
  const user = ctx.params.user;
  callback(null, { user, fileContent });
}`;