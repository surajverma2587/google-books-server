const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { PORT, DB_URI, MONGOOSE_OPTIONS } = require("./config");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
