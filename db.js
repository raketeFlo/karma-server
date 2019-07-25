const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/karma', { useNewUrlParser: true })
  // eslint-disable-next-line no-console
  .on('error', console.error.bind(console, 'connection error:'))
  // eslint-disable-next-line no-console
  .once('open', () => console.log('Database connected'));

module.exports = mongoose;
