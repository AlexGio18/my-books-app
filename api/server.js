const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config()

global.Task = require('./models/bookModel');

const routes = require('./routes/bookRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
console.log(process.env.DB_HOST)
mongoose.connect(
  process.env.DB_HOST,
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);