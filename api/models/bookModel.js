const mongoose = require('mongoose');
require('mongoose-long')(mongoose);

const {Types: {Long}} = mongoose;

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: String,
    author: String,
    link: String,
    binding: String,
    price: String,
    image_link: String,
    isbn_13: Long,
    isbn_10: Number,
    publisher: String,
    publish_date: String,
    page_count: Number,
    dimensions: String,
    weight: String
  },
  { collection: 'books' }
);

module.exports = mongoose.model('books', bookSchema);