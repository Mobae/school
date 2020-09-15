const express = require("express");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
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
app.use("/update", require("./routes/update"));
const fileRouter = require("./routes/file");

// creating a storage engine
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });
app.use("/documents", fileRouter(upload));

/**
CHAT
**/
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`);

  socket.on("sendMessage", (data) => {
    console.log(`DATA: ${data.text}`);
    socket.to(data.room).emit("message", data.text);
  });

  socket.on("join", (classId) => {
    socket.join(classId);
    console.log(classId);
    socket.to(classId).emit("joinSuccess", "welcome");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// app.listen(process.env.PORT, () =>
//   console.log(`Server runnning on ${process.env.PORT}`)
// );

server.listen(process.env.PORT, () => {
  console.log(`Server runnning on ${process.env.PORT}`);
});
