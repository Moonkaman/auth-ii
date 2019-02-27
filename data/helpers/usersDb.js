const db = require('../dbConfig');

module.exports = {
  get,
  getBy,
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

function getBy(filter) {
  return db('users').where(filter).first();
}

function insert(user) {
  return db('users').insert(user)
    .then(id => {
      return db('users').where({id: id[0]}).first();
    })
}