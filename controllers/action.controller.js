const Action = require('../models/action.model');

// load all actions
const getActions = async (ctx) => {
  try {
    const actions = await Action.find();
    ctx.body = actions;
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = { message: error.message };
  }
};

// add action
const addAction = async (ctx) => {
  try {
    const action = await Action.create(ctx.request.body);
    ctx.body = action;
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = { message: error.message };
  }
};


module.exports = { getActions, addAction };
