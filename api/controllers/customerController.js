const { getAllBooks, addBook, getBookByKeyword, editBook, deleteBook, } = require("../repositories/bookRepository" );

async function search(req, res) {

    let data = await getBookByKeyword(req.query.keyword);

    console.log(data);
    
    return res.json(data);
}

async function create(req, res) {

    const { author, title, genre, year } = req.body;
    const available_copies = 0;
    const loaned_copies = 0;

    await addBook(author, title, genre, year, available_copies, loaned_copies);

    return res.status(201).send();
}

async function update(req, res) {
    
    const { author, title, genre, year, available_copies, loaned_copies } = req.body;

    await editBook(req.params.id, author, title, genre, year, available_copies, loaned_copies);

    return res.status(204).send();
}

async function remove(req, res) {

    await deleteBook(req.params.bookId);

    return res.status(204).send();
}
async function getAll(req, res) {
    let data = await getAllBooks();
    return res.json(data);
}

module.exports = {
    search,
    create,
    update,
    remove,
    getAll,
}
