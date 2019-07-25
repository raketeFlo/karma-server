/* eslint-disable no-underscore-dangle */
const User = require('../models/user.model');

const addCompletedAction = async (ctx, next) => {
  try {
    const newCompletedAction = await User.findByIdAndUpdate(
      ctx.request.body._id,
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
  try {
    const user = await User.findOne({ user_name: ctx.request.body.user_name });
    if (user) {
      if (user.user_password === ctx.request.body.user_password) {
        ctx.body = 'Password correct';
      } else {
        ctx.body = 'Wrong password';
      }
    } else {
      ctx.body = 'User does not exist';
    }
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = { message: error.message };
  }
};


module.exports = { addCompletedAction, checkUser };
