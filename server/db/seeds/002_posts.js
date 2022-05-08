/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      email: "iamcaoh@gmail.com",
      username: "caoh",
      cocktail_name: "Irish whiskey old fashioned",
      description:
        "Add a twist to an old fashioned and use elderflower cordial in place of the usual orange. It’s a sophisticated cocktail to add to a dinner party",
      ingredients:
        "Irish Whiskey , 10ml elderflower cordial, 10ml Sauternes, ice , lemon zest",
      recipe:
        "Put everything except the lemon zest in a tumbler and give it a quick stir to combine and dilute. Garnish with the lemon zest to serve.",
    },
  ]);
};
