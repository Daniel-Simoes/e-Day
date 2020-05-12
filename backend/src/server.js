const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://eday:eday@eday-tvuy0.mongodb.net/eday?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);