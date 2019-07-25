const Koa = require('koa');

const app = new Koa();
const port = 3001;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}🤘`);
});
