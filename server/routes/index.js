const express = require("express");
const config = require("../../knexfile");
const knex = require("knex")(config);
const router = express.Router();
const cors = require("cors");
router.use(cors());

require("dotenv").config({
  path: "../.env",
});

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/posts", async (req, res) => {
  const response = await knex.select("*").from("posts");
  res.status(200).send(response);
});

router.post("/newpost", async (req, res) => {
  console.log("request", req);
  console.log("typeof request", typeof req);
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
module.exports = router;
