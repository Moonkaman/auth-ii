const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../data/helpers/usersDb');

const router = express.Router();

const secret = process.env.JWT_SECRET || 'the krabby patty secret formula'

router.post('/register', (req, res) => {
  if(req.body.username && req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 12);
    db.insert(req.body)
      .then(user => {
          const token = generateToken(user);
          res.status(201).json({message: `Successfully signed up, welcome ${user.username}`, token})
      })
      .catch(err => res.status(500).json({errorMsg: 'Could not create a new user at this time', err}))
  }
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department ? user.department : 'None'
  }

  const options = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, secret, options);
}

module.exports = router;