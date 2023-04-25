const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Long_website_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully !!!!');
    } catch (error) {
        console.log('connect failure !!!');
    }
}

module.exports = { connect };
