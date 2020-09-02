const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    // .connect(process.env.MONGO_URI, {
    .connect('mongodb+srv://ajay123:ajay123@transactions-puvlf.mongodb.net/mobae?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
