const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes) ;

server.listen(3333);