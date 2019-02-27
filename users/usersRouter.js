const express = require('express');

const db = require('../data/helpers/usersDb');
const authMW = require('../auth/restrictedMiddleware');

const router = express.Router();

router.get('/', authMW.restricted, (req, res) => {
  db.get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({errorMsg: 'Could not retrieve list of users at this time.', err}));
})


module.exports = router;