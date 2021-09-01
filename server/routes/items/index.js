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
    category, type, size, color, name, minprice, maxprice,
  } = req.query;

  const queryParams = {};
  const options = {};

  if (category) {
    queryParams.category = category;
  }

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

  if (minprice) {
    queryParams.price = {
      $gte: Number(minprice),
    };
  }

  if (maxprice) {
    queryParams.price = {
      $lte: Number(maxprice),
    };
  }

  if (minprice && maxprice) {
    queryParams.price = {
      $gte: Number(minprice),
      $lte: Number(maxprice),
    };
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
