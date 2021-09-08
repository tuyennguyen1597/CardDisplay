const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(database);

    console.log('MongoDB is connected')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
};

module.exports = connectDB;
