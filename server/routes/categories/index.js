const { ObjectId } = require('mongodb');

const get = (req, res) => async ({ db }) => {
  const queryParams = {};
  const options = {};

  const data = await db.collection('categories').find(queryParams, options).toArray();

  res.json(data);
};

module.exports = [
  {
    path: 'categories',
    method: 'get',
    fn: get,
  },
];
