class NewsControllers {
    // [GET] /new
    index(req, res) {
        res.render('new');
    }

    // [GET] /new/:slug
    show(req, res) {
        res.send('new details');
    }
}

module.exports = new NewsControllers();
