const { ObjectId } = require('mongodb');

const getById = (req, res) => async ({ db }) => {
  const { id } = req.params;

  const queryParams = {};
  const options = {};

  queryParams._id = ObjectId(id);

  const data = await db.collection('items').findOne(queryParams, options);

  res.json(data);
};

const get = (req, res) => async ({ db }) => {
  const {
    type, size, color, name,
  } = req.query;

  const queryParams = {};
  const options = {};

  if (type) {
    queryParams.type = type;
  }

  if (name) {
    queryParams.name = {
      $regex: name,
      $options: 'i',
    };
  }

  if (size) {
    queryParams.sizes = Number(size);
  }

  if (color) {
    queryParams.colors = color;
  }

  const data = await db.collection('items').find(queryParams, options).toArray();

  res.json(data);
};

module.exports = [
  {
    path: 'items',
    method: 'get',
    fn: get,
  },
  {
    path: 'items/:id',
    method: 'get',
    fn: getById,
  },
];
