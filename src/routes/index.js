const newRouter = require('./new');
const siteRouter = require('./site');

function route(app) {
    //route for new
    app.use('/new', newRouter);

    //route for home
    app.use('/', siteRouter);
}

module.exports = route;
