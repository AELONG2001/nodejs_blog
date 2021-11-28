const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] /me/stored/courses
    storedCourse(req, res, next) {
        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsDeleted(),
        ]).then(([courses, deletedCount]) => {
            res.render('me/stored_courses', {
                deletedCount,
                courses: multipleMongooseToObject(courses),
            });
        });
    }

    // [GET] /me/trash/courses
    trashCourse(req, res, next) {
        Course.findDeleted({})
            .sortable(req)
            .then((courses) =>
                res.render('me/trash_courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
