const User = require('../models/user.model');

const addCompletedAction = async (ctx, next) => {
  try {
    const newCompletedAction = User.findByIdAndUpdate(
      ctx.request.body.id,
      { completedActions: ctx.request.body.completedActions },
      { new: true },
    );
    // response body
    ctx.body = newCompletedAction;
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = { message: error.message };
  }
};

const checkUser = async (ctx, next) => {

};

module.exports = { addCompletedAction, checkUser };
