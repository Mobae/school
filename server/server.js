const express = require("express");
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
require("dotenv").config();

const connectDB = require("./db");

const app = express();
connectDB();

app.use(express.json());
app.use("/auth", require("./routes/auth"));
app.use("/student", require("./routes/student"));
app.use("/attendance", require("./routes/attendance"));
app.use("/class", require("./routes/class"));
app.use("/admin", require("./routes/admin"));
app.use("/classnotice", require("./routes/classnotice"));
app.use("/schoolnotice", require("./routes/schoolnotice"));
const fileRouter = require('./routes/file');

// creating a storage engine
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
      return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
              if (err) {
                  return reject(err);
              }
              const filename = buf.toString('hex') + path.extname(file.originalname);
              const fileInfo = {
                  filename: filename,
                  bucketName: 'uploads'
              };
              resolve(fileInfo);
          });
      });
  }
});
const upload = multer({ storage });
app.use('/documents', fileRouter(upload));

app.listen(process.env.PORT, () =>
  console.log(`Server runnning on ${process.env.PORT}`)
);
