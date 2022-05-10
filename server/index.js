const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.json());
app.use(router);
const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log(`app listening on port ${PORT}`));
