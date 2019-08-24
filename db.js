const mongoose = require('mongoose');

// eslint-disable-next-line no-console
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/karma', { useNewUrlParser: true }).then(() => console.log('Connected')).catch(error => console.log(error));


module.exports = mongoose;
