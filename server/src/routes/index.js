const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const meRouter = require('./me.route');
const coursesRouter = require('./courses.route');

function route(app) {
    //   app.get("/", (req, res) => {
    //     res.render("home");
    //   });

    //   app.get("/news", (req, res) => {
    //     console.log(req.query);
    //     res.render("news");
    //   });

    //   app.get("/search", (req, res) => {
    //     // console.log(req.query.q);
    //     res.render("search");
    //   });

    //   app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.send(" ");
    //   });

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
