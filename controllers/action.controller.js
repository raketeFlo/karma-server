const Action = require('../models/action.model');

// load all actions
const getActions = async (ctx) => {
  const actions = await Action.find();
  ctx.status = 200;
  ctx.body = actions;
};


module.exports = { getActions };