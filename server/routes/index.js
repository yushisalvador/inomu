const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
app.use(router);

module.exports = router;
