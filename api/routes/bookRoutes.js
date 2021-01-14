const bookBuilder = require('../controllers/bookController');

module.exports = app => {
  app
    .route('/books')
    .get(bookBuilder.list_all_books)
    .post(bookBuilder.create_a_book);

  app
    .route('/books/:bookId')
    .get(bookBuilder.read_a_book)
    .put(bookBuilder.update_a_book)
    .delete(bookBuilder.delete_a_book);
};