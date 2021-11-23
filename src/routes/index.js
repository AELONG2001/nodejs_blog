const newRouter = require('./new');
const courseRouter = require('./courses');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    //route for new
    app.use('/new', newRouter);

    //route for courses
    app.use('/courses', courseRouter);

    //route for courses
    app.use('/me', meRouter);

    //route for home
    app.use('/', siteRouter);
}

module.exports = route;
