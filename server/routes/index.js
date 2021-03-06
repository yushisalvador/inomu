const express = require("express");
const config = require("../../knexfile");
const knex = require("knex")(config);
const router = express.Router();
const cors = require("cors");
router.use(cors());

require("dotenv").config({
  path: "../.env",
});

router.get("/posts", async (req, res) => {
  const response = await knex.select("*").from("posts");
  res.status(200).send(response);
});

router.post("/newpost", async (req, res) => {
  const postObj = {
    username: req.body.username,
    image: req.body.image,
    cocktail_name: req.body.cocktail_name,
    description: req.body.description,
    recipe: req.body.recipe,
  };
  console.log("saving", postObj);
  await knex("posts").insert(postObj);
});

router.delete("/del/:input", async (req, res) => {
  const input = parseInt(req.params.input);

  await knex("posts").where({ id: input }).del();

  const posts = await knex.select("id").from("posts");

  res.status(200).send(posts);
});
module.exports = router;
