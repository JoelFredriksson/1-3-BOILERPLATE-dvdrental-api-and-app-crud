const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:Ekolsund@localhost:5432/Bibliotek')

async function selectBookByKeyword(keyword) {
  let data = await db.any(`SELECT * FROM books WHERE title LIKE '${keyword}%' OR author LIKE '${keyword}%' OR genre LIKE '${keyword}%'`);
  return data;
}

async function selectAllBooks() {
  try {
      const result = await db.any("SELECT * FROM books");
      return result;
  } catch (err) {
      console.error(err);
      throw err;
  }
}

async function insertBook(author, title, genre, year) {
  await db.none(`INSERT INTO books (author, title, genre, year) VALUES ('${author}', '${title}', '${genre}', '${year}')`);
}

async function updateBook(bookId, author, title, genre, year) {
  await db.none(`UPDATE books SET author = '${author}', title = '${title}', genre = '${genre}', year = '${year}' WHERE id = ${bookId}`);
}

async function deleteBook(bookId) {
  await db.none(`DELETE FROM books WHERE id = ${bookId}`);
}

module.exports = {
  selectBookByKeyword,
  selectAllBooks,
  insertBook,
  updateBook,
  deleteBook
};
