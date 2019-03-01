
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t){
    t.increments();
    t.string('username', 128).unique();
    t.string('password').notNullable();
    t.string('department');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
