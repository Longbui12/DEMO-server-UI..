const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: { type: String, default: '', minLength: 50 },
        description: { type: String, default: '', maxLength: 500 },
        price: { type: Number, default: 0 },
        image: { type: String, default: '', maxLength: 300 },
        createAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: (date = new Date()) },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Product', Product);
