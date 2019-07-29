/* eslint-disable no-underscore-dangle */
const User = require('../models/user.model');

// update user
const updateUser = async (ctx) => {
  const user = await User.findByIdAndUpdate(
    { _id: ctx.request.body._id },
    ctx.request.body,
    { new: true },
  );
  // send back updated user
  ctx.status = 200;
  ctx.body = user;
};

// check if password is correct and if user exists
const checkUser = async (ctx) => {
  const user = await User.findOne({ user_name: ctx.request.body.user_name });
  if (user) {
    if (user.user_password === ctx.request.body.user_password) {
      ctx.status = 200;
      ctx.body = 'Password correct';
    } else {
      ctx.status = 401;
      ctx.body = 'Wrong password';
    }
  } else {
    ctx.status = 400;
    ctx.body = 'User does not exist';
  }
};

// load user
const getUser = async (ctx) => {
  const user = await User.find();
  ctx.status = 200;
  ctx.body = user;
};


module.exports = { updateUser, checkUser, getUser };
