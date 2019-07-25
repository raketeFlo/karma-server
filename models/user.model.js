const db = require('../db');

const { Schema } = db;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
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
