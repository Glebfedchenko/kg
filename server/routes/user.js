const express = require('express');
const userCtrl = require('../controllers/user');

const router = express.Router();

router.route('/register').post(userCtrl.register);
router.route('/login').post(userCtrl.login);

module.exports = router;
