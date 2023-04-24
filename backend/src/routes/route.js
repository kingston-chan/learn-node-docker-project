const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/users', controller.getUsers);
router.post('/user', controller.postUser);

module.exports = router;
