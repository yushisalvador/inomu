/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      username: "caoh",
      cocktail_name: "Irish whiskey old fashioned",
      description:
        "Add a twist to an old fashioned and use elderflower cordial in place of the usual orange. It’s a sophisticated cocktail to add to a dinner party",
      ingredients:
        "Irish Whiskey , 10ml elderflower cordial, 10ml Sauternes, ice , lemon zest",
      recipe:
        "Put everything except the lemon zest in a tumbler and give it a quick stir to combine and dilute. Garnish with the lemon zest to serve.",
    },
    {
      username: "paul",
      cocktail_name: "Espresso martini",
      description:
        "Learn how to make this classic coffee cocktail. This easy recipe uses freshly brewed espresso, a dash of coffee liqueur and a simple sugar syrup.",
      ingredients:
        "For the syrup: 100g golden caster sugar,For the cocktail: ice, 100ml vodka, 50ml freshly brewed espresso coffee, 50ml coffee liqueur (we used Kahlua), 4 coffee beans (optional)",
      recipe:
        "Start by making the sugar syrup. Put the caster sugar in a small pan over a medium heat and pour in 50ml water. Stir, and bring to the boil. Turn off the heat and allow the mixture to cool. Put 2 martini glasses in the fridge to chill.Once the sugar syrup is cold, pour 1 tbsp into a cocktail shaker along with a handful of ice, the vodka, espresso and coffee liqueur. Shake until the outside of the cocktail shaker feels icy cold. Strain into the chilled glasses. Garnish each one with coffee beans if you like.",
    },
  ]);
};
