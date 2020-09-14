const express = require('express');
require('dotenv').config();

const connectDB = require('./db');

const app = express();
connectDB();

app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.use('/student', require('./routes/student'));
app.use('/attendance', require('./routes/attendance'));
app.use('/class', require('./routes/class'));
app.use('/admin', require('./routes/admin'));
app.use('/classnotice', require('./routes/classnotice'));
app.use('/schoolnotice', require('./routes/schoolnotice'));
app.use('/update', require('./routes/update'));

app.listen(process.env.PORT, () =>
  console.log(`Server runnning on ${process.env.PORT}`)
);
