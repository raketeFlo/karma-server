/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
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
  const basic = ctx.headers.authorization.split(' ');
  if (basic.length < 2 && basic[0] !== 'Basic') {
    throw new Error('Missing basic authentication header');
  }
  // decode base64
  const [username, password] = Buffer.from(basic[1], 'base64').toString('utf-8').split(':');
  const user = await User.findOne({ user_name: username });
  // check if user exists and if password correct
  if (user) {
    const match = await bcrypt.compare(password, user.user_password);
    if (match) {
      ctx.status = 200;
      ctx.body = JSON.stringify(user.user_name);
    } else {
      ctx.status = 401;
      ctx.body = {
        fail: 'password',
      };
    }
  } else {
    ctx.status = 401;
    ctx.body = {
      fail: 'username',
    };
  }
};

// load user with unique username
const getUser = async (ctx) => {
  const userName = ctx.params.username;
  const user = await User.find({ user_name: userName });
  ctx.status = 200;
  ctx.body = user;
};


module.exports = { updateUser, checkUser, getUser };