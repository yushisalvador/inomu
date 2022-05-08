const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");

app.use(express.json());
app.use(router);
app.use(cors());
const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log(`app listening on port ${PORT}`));
