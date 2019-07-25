const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const router = require('./routers/user.router');

const app = new Koa();
const port = 3001;

// middlewares
app
  .use(logger())
  .use(bodyParser())
  .use(router.routes());


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}🤘`);
});
