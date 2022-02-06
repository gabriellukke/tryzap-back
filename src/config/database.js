require('dotenv');
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/webchat';

mongoose.Promise = global.Promise;

const config = {
  uri: MONGO_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

mongoose.connection.on('open', () => {
  console.log('Successfully connected to database.')
});

mongoose.connection.on('error', (err) => {
  console.log(err)
  throw new Error('Could not connect to MongoDB.')
});

module.exports = {
  connect: () => mongoose.connect(config.uri, config.options)
};
