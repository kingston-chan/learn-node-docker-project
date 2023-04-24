const User = require('../models/model');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        return res.status(200).json({
            users: users
        })
    } catch (err) {
        next(err);
    }
}

exports.postUser = async (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age
    })

    try {
        await user.save();
        return res.status(200).json({});
    } catch (err) {
        next(err);
    }
}