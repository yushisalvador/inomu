/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.integer("user_id").references("user_id").inTable("users");
    table.string("username").notNullable();
    table.string("image");
    table.string("cocktail_name").notNullable();
    table.string("description", 1000);
    table.string("ingredients", 1000);
    table.string("recipe", 5000).notNullable;
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
