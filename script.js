const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');
const dotenv = require('dotenv').config();

// express app
const app = express();

// connect to mongodb
const dbURI = process.env.BOOKS_DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.get('/books', (req, res) => {
    Book.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});


