const express = require("express");
const app = express();
const config = require("../db/knexfile");
const knex = require("knex")(config);
const router = express.Router();
app.use(express.json());
app.use(router);
require("dotenv").config({
  path: "../.env",
});

router.get("/", async (req, res) => {
  const response = await knex.select("*").from("posts");
  res.status(200).send(response);
});
module.exports = router;
