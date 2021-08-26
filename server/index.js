const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const routes = require('./routes');

const { query } = require('./mongodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Object.entries(routes).forEach(([routeName, routes]) => {
  routes.forEach((route) => {
    app[route.method](`/api/${route.path}`, (...args) => {
      query(route.fn(...args));
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
