const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');
const bookRepository = require('../repositories/bookRepository');

router.get("/search", async (req, res) => {

    console.log(req.query);
    
    await controller.search(req, res);
});
router.put('/books/:id', async (req, res) => {
    let { id, author, title, genre, year } = req.body;
    try {
      await bookRepository.editBook(id, author, title, genre, year);
      res.status(200).send('Book updated successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating book');
    }
});

router.delete('/books/remove/:id', async (req, res) => {
    let id = req.params.id;
    try {
      await bookRepository.deleteBook(id);
      res.status(200).send('Book deleted successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting book');
    }
  });
router.get("/all", async (req, res) => {
    await controller.getAll(req, res);
});
router.post("/add", async (req, res) => {
    await controller.create(req, res);
});
router.post("/books", async (req, res) => {
    let { author, title, genre, year } = req.body;
    try {
      await bookRepository.addBook(author, title, genre, year);
      res.status(200).send('Book added successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error adding book');
    }
});

module.exports = router;
