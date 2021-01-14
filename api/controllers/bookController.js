const mongoose = require('mongoose');
const book = mongoose.model('books');

exports.list_all_books = (req, res) => {
  book.find({}, (err, books) => {
    if (err) res.send(err);
    res.json(books);
  });
};

exports.create_a_book = (req, res) => {
  const newBook = new book(req.body);
  newBook.save((err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

exports.read_a_book = (req, res) => {
  book.findById(req.params.bookId, (err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

exports.update_a_book = (req, res) => {
  book.findOneAndUpdate(
    { _id: req.params.bookId },
    req.body,
    { new: true },
    (err, book) => {
      if (err) res.send(err);
      res.json(book);
    }
  );
};

exports.delete_a_book = (req, res) => {
  book.deleteOne({ _id: req.params.bookId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'book successfully deleted',
     _id: req.params.bookId
    });
  });
};