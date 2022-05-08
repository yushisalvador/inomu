const knexfile = require("./knexfile");
const environment = knexfile[process.env.NODE_ENV || "development"];
const knex = require("knex")(environment);
module.exports = db;
