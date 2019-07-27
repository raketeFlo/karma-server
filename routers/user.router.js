const Router = require('koa-router');
const ctrlUser = require('../controllers/user.controller');
const ctrlAction = require('../controllers/action.controller');

const router = new Router();

router.post('/sign-in', ctrlUser.checkUser);
router.get('/user', ctrlUser.getUser);
router.put('/user', ctrlUser.updateUser);

router.get('/actions', ctrlAction.getActions);


module.exports = router;
