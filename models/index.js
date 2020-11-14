const mongoose = require('mongoose');

const dbUrl = process.env.DBURL;
const dbName = process.env.DBNAME;

mongoose.connect(`${dbUrl}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
db.once('open', function () {
  console.log('Connected to MongoDB database'); // eslint-disable-line no-console
});

module.exports = mongoose;