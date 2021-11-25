const path = require('path');
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const route = require('./routes');

const sortMiddleware = require('./app/middleware/SortMiddleware');

const db = require('./config/db');

//connect to mongodb
db.connect();

const app = express();
const port = 5000;

//override request method
app.use(methodOverride('_method'));

//Custom middleware
app.use(sortMiddleware);

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
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default';

            const icons = {
                default: 'bx bxs-sort-alt',
                asc: 'bx bx-sort-up',
                desc: 'bx bx-sort-down',
            };

            const icon = icons[sortType];

            //=====

            const types = {
                default: 'asc',
                asc: 'desc',
                desc: 'asc',
            };

            const type = types[sortType];

            return `
                <a href="?_sort&column=${field}&type=${type}" class="text-decoration-none">
                <i class="${icon}" style="transform: translateY(2px)"></i>
                </a>
            `;
        },
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