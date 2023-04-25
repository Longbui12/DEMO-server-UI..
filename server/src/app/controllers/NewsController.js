const Product = require('../models/Product.model');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
    // [GET] /news

    //   async index(req, res) {
    //     try {
    //       const products = await Product.find({});
    //       res.json(products);
    //     } catch (err) {
    //       res.status(400).json({ error: "ERROR !!!" });
    //     }
    //   }

    index(req, res, next) {
        Product.find({})
            //   .then((products) => {
            //     products = products.map((product) => product.toObject());
            //     res.render("news", { products });
            //   })
            .then((products) => {
                res.render('news', {
                    products: mutipleMongooseToObject(products),
                });
            })
            .catch(next);
    }

    //   index(req, res) {
    //     res.render("news");
    //   }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAILS !!!!');
    }
}
module.exports = new NewsController();
