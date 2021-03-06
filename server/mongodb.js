const { MongoClient } = require('mongodb');

// Database Name
const dbName = 'golden-shoe-shop';
const test = 'i2c3rY_GJTW4x';

// Connection URL
const url = `mongodb+srv://katia:${test}@cluster0.jrfap.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Create a new MongoClient
const open = (url) => new MongoClient(
  url,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 },
);

const query = (fn) => {
  const client = open(url);

  // Use connect method to connect to the Server
  client.connect((err) => {
    const db = client.db(dbName);

    fn({ db });
  });

  client.close();
};

module.exports = {
  query,
};
