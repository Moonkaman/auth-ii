const db = require('../dbConfig');

module.exports = {
  get,
  insert
}

function get(id) {
  if(id) {
    console.log('finding user with id ', id)
    return db('users').where({id: id}).first();
  } else {
    console.log('getting all users')
    return db('users');
  }
}

function insert(user) {
  return db('users').insert(user)
    .then(id => {
      return db('users').where({id: id[0]}).first();
    })
    .catch(err => console.log('big catch inside of usersDb'))
}