const db_context = require('../db_context.js');
const bookModel = require('../models/bookModel.js');
class bookRepository {

    static async getAll() {

        let books = [];

        let data = await db_context.selectAllBooks();

   data.forEach(book => {
  books.push(new bookModel(book.id, book.author, book.title, book.genre, book.year, book.available_copies, book.loaned_copies));
});


        return books;
    };

    static async getBookByKeyword(keyword) {

        let books = [];

        let data = await db_context.selectBookByKeyword(keyword);

        data.forEach(book => {
            books.push(new bookModel(book.id, book.author, book.title, book.genre, book.year, book.available_copies, book.loaned_copies));
        });

        return books;
    };

    static async addBook(author, title, genre, year) {
        db_context.insertBook(author, title, genre, year);
      };

    static async editBook(bookId, author, title, genre, year, available_copies, loaned_copies) {

        db_context.updateBook(bookId, author, title, genre, year, available_copies, loaned_copies);
    };

    static async deleteBook(bookId) {

        db_context.deleteBook(bookId);
    };
};

module.exports = bookRepository;
