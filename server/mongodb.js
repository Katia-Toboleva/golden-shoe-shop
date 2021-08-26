const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Database Name
const dbName = 'golden-shoe-shop';

// Connection URL
const url = `mongodb+srv://test:test@cluster0.zcoyz.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Create a new MongoClient
const open = (url) => {
  return new MongoClient(url);
};

const query = (fn) => {
  const client = open(url);

  // Use connect method to connect to the Server
  client.connect((err) => {
    const db = client.db(dbName);

    fn({ db });
  });

  client.close();
}

module.exports = {
  query,
}
