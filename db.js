const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
// eslint-disable-next-line no-console
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log(`Connected with ${process.env.MONGODB_URI}`)) // eslint-disable-line no-console
  .catch(error => console.log(error)); // eslint-disable-line no-console


module.exports = mongoose;
