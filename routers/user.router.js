const Router = require('koa-router');

const router = new Router();

router.post('/sign-in', () => console.log('/login working'));
router.get('/', () => console.log('/ actions loading working'));
router.patch('/user/:id', () => console.log('/patch actions working'));

module.exports = router;
