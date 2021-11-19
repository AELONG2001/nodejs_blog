const path = require('path');
const express = require('express');
const logger = require('morgan');
const handlebars = require('express-handlebars')

const app = express()
const port = 5000

app.use(express.static('public'))

//HTTP logger
app.use(logger('dev'))

//Template engine
const hbs = handlebars.create({
  extname: '.hbs',
});


app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views/partials/'));
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', function (req, res) {
  res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})