const { ObjectId } = require('mongodb');

const create = (req, res) => async ({ db }) => {
  const { title, description } = req.body;

  const queryParams = {
    type: 'items',
    _id: new ObjectId().str,
  };

  const options = {};

  if (title) {
    queryParams.title = title;
  }

  if (description) {
    queryParams.description = description;
  }

  const data = await db.collection('items').insertOne(queryParams, options);

  const newData = {
    ...data.ops[0],
    id: data.ops[0]._id,
  };

  delete newData._id;

  res.send(newData);
};

const get = (req, res) => async ({ db }) => {
  const { id } = req.params;
  let data;

  const queryParams = {};
  const options = {};

  if (id) {
    queryParams._id = ObjectId(id);
    data = await db.collection('items').findOne(queryParams, options);
  } else {
    data = await db.collection('items').find(queryParams, options).toArray();
  }

  res.send(data); 
};

const remove = (req, res) => async ({ db }) => {
  const { id } = req.params;

  const queryParams = {};
  const options = {};

  if (id) {
    queryParams._id = ObjectId(id);
  }

  const data = await db.collection('items').deleteOne(queryParams, options);

  res.send(data);
};

const edit = (req, res) => async ({ db }) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const filters = {
    _id: ObjectId(id),
  };

  const payload = {};

  if (title) {
    payload.title = title;
  }

  if (description) {
    payload.description = description;
  }

  const update = { $set: payload }

  await db.collection('items').updateOne(filters, update);
  const result = await db.collection('items').findOne(filters);

  res.send(result);
};

module.exports = [
  {
    path: 'items',
    method: 'post',
    fn: create,
  },
  {
    path: 'items',
    method: 'get',
    fn: get,
  },
  {
    path: 'items/:id',
    method: 'get',
    fn: get,
  },
  {
    path: 'items/:id',
    method: 'delete',
    fn: remove,
  },
  {
    path: 'items/:id',
    method: 'put',
    fn: edit,
  },
];
