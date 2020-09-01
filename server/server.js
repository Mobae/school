const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./db");

const app = express();
connectDB();

app.listen(process.env.PORT, () =>
  console.log(`Server runnning on ${process.env.PORT}`)
);
