const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

// Rutas para libros
router.get('/book', BookController.getAllBooks);
router.get('/book:id', BookController.getBookById);
router.post('/book', BookController.createBook);
router.put('/book:id', BookController.updateBook);
router.delete('/book:id', BookController.deleteBook);

module.exports = router;
