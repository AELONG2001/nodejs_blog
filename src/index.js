const path = require('path');
const express = require('express');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');

const app = express();
const port = 5000;

//files static
app.use(express.static('src/public'));

//config middleware listen for body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(logger('dev'));

//Template engine
const hbs = handlebars.create({
    extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views/partials/'));
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
});
