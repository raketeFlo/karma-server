const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa-cors');
const router = require('./routers/router');

const app = new Koa();
const port = 3001;

// middlewares
app
  .use(logger())
  .use(cors())
  .use(bodyParser())
  .use(router.routes());


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}🤘`);
});
