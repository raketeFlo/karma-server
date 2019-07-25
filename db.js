const mongoose = require('mongoose');

// eslint-disable-next-line no-console
mongoose.connect('mongodb://localhost:27017/karma', { useNewUrlParser: true }, () => console.log('Database connected'));


module.exports = mongoose;
