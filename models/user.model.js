const db = require('../db');

const { Schema } = db;

const UserSchema = Schema({
  user_name: {
    type: String,
    unique: true,
    required: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  curr_level: {
    type: Number,
  },
  curr_exp: {
    type: Number,
  },
  completedActions: {
    type: Array,
  },
});

module.exports = db.model('User', UserSchema);
