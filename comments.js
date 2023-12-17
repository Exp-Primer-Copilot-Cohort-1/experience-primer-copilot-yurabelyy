// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
const commentsController = require('./controllers/commentsController');
commentsController(app);

// listen to port
app.listen(port);
console.log('You are listening to port 3000');

