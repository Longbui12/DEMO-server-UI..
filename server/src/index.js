const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const { deprecate } = require('util');
const methodOverride = require('method-override');

const sortMiddleware = require('./app/middlewares/sortMiddleware');

const route = require('./routes/index.js');
const db = require('./config/db');
// connect to DB
db.connect();

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//Custom middlewares
app.use(sortMiddleware);

// ví dụ về middleware
// app.use(bacBaoVe);
// function bacBaoVe(req, res, next) {
//   if (["vethuong", "vevip"].includes(req.query.ve)) {
//     req.face = "GACH GACH GACH !!";
//     return next();
//   }
//   res.status(403).json({ message: "Access denied" });
// }

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebar.helper'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// Routes init
route(app);
