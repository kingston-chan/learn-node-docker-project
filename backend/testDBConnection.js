const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
}

const dbUrl = 'mongodb://localhost:27017/test';

const connect = async () => {
    try {
        await mongoose.connect(dbUrl, options);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

connect();