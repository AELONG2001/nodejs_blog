const path = require('path');
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const route = require('./routes');

const db = require('./config/db');

//connect to mongodb
db.connect();

const app = express();
const port = 5000;

//override request method
app.use(methodOverride('_method'));

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
    helpers: {
        sum: (a, b) => a + b,
    },
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views', 'partials'));
app.set('views', path.join(__dirname, 'resources', 'views'));

//use routes
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost: ${port}`);
});
