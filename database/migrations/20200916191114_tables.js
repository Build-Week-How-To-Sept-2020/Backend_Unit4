exports.up = function(knex) {
  return knex.schema
  .createTable("users", tb => {
    tb.increments();
    tb.string("username", 128).notNull().unique();
    tb.string("password", 128).notNull();
    tb.string("email", 128).notNull().unique();
    tb.datetime("joined").defaultTo(knex.raw("current_timestamp"));
  })
  .createTable("posts", (tbl) => {
    tbl.increments();
    tbl.text("title");
    tbl.text("contents");
    tbl.integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    tbl.datetime("created").defaultTo(knex.raw("current_timestamp"));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};