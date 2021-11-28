const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteControllers {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /my-course
    myCourse(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('my-course', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /login
    logIn(req, res, next) {
        res.render('home', {
            url: req.url,
        });
    }
}

module.exports = new SiteControllers();
