// eslint-disable-next-line
const mongoose = require('mongoose');
const {User} = require('../models/user');

module.exports = {
  register: async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({
      success: true,
      userdata: user,
    });
  },
  login: (req, res) => {
    const {email, password} = req.body;
    return User.findOne({email, password})
      .then(user => {
        if (!user) {
          return res.status(400).json({msg: `User not found, please register`});
        }
        return res.status(200).json({user, msg: `User found`});
      })
      .catch(err => res.status(400).json({err}));
  },
};
