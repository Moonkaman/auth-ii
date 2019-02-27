const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../data/helpers/usersDb');

const router = express.Router();

const secret = process.env.JWT_SECRET || 'the krabby patty secret formula'

router.get('/', (req, res) => {
  db.get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({errorMsg: 'Could not retrieve list of users at this time.', err}));
})


module.exports = router;