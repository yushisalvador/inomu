const express = require("express");
const app = express();
const router = require("./routes");
app.use(express.json());

app.listen(8080, () => console.log("app listening on port 8080"));
