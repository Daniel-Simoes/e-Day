const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://eday:eday@eday-tvuy0.mongodb.net/eday?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})


app.use(express.json());
app.use(routes);

app.listen(3333);