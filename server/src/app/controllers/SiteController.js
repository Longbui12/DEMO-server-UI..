const Course = require('../models/Course.model');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET]
    // Cách 1: dung async & await
    // async index(req, res) {
    //   try {
    //     const courses = await Course.find({});
    //     res.json(courses);
    //   } catch (err) {
    //     res.status(400).json({ error: "ERROR !!!" });
    //   }
    // }
    // cách 2: dung .then .catch
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // res.render('home');

    // [GET]
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
