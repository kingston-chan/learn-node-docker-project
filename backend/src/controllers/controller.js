const mongoose = require('mongoose');
const User = require('../models/model');

exports.getUsers = async (req, res, next) => {
    try {
        return await User.find({});
    } catch (err) {
        next(err);
    }
}