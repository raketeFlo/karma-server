const Action = require('../models/action.model');

// load all actions
const getActions = async (ctx, next) => {
  try {
    const actions = await Action.find();
    ctx.body = actions;
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = { message: error.message };
  }
  await next();
};

module.exports = { getActions };
