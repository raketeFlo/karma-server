/* eslint-disable no-underscore-dangle */
const User = require('../models/user.model');

// add completed action to user
const addCompletedAction = async (ctx) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: ctx.request.body._id },
      { $push: { completedActions: ctx.request.body.completedActions } },
      { new: true },
    );
    // send back updated user
    ctx.body = user;
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = { message: error.message };
  }
};

// check if password is correct and if user exists
const checkUser = async (ctx) => {
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
