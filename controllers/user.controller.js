/* eslint-disable no-underscore-dangle */
const User = require('../models/user.model');

// add completed action to user
const addCompletedAction = async (ctx, next) => {
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
  await next();
};

// check if password is correct and if user exists
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
  await next();
};

// load user
const getUser = async (ctx, next) => {
  try {
    const user = await User.find();
    ctx.body = user;
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = { message: error.message };
  }
  await next();
};


module.exports = { addCompletedAction, checkUser, getUser };
