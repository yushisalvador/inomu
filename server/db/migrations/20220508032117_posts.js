/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table
      .string("username")
      .notNullable()
      .references("username")
      .inTable("users");
    table.string("cocktail_name").notNullable();
    table.string("description");
    table.string("recipe").notNullable;
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
