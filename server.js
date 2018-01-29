require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

// setup morgan logger
const logger = require('morgan');
if (app.get('env') === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

const port = process.env.port || 3000;

// serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.json('working');
});

app.listen(port, function () {
  console.log('listening on port ', port);
});
