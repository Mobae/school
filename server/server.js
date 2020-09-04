const express = require("express");
require("dotenv").config();

const connectDB = require("./db");

const app = express();
<<<<<<< HEAD
app.use(express.json());
=======
>>>>>>> 26c5b01b5d6f5e445a9afcc9da44f4c140c214cc
connectDB();

app.use(express.json());
app.use("/auth", require("./routes/auth"));
app.use("/student", require("./routes/student"));
app.use("/attendance", require("./routes/attendance"));
app.use("/class", require("./routes/class"));
app.use("/admin", require("./routes/admin"));

app.listen(process.env.PORT, () =>
  console.log(`Server runnning on ${process.env.PORT}`)
);
