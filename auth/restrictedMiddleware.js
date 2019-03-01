const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'the krabby patty secret formula';

function restricted(req, res, next) {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({message: 'I know what you did, hacker man'});
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({message: 'Please log in'})
  }
}

module.exports = {
  restricted
};