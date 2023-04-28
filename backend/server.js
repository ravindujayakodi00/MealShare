const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {
  default: redistributionrequests,
} = require('./models/redistributionrequests.js');
require('dotenv').config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

const VolunteerRouter = require('./routes/volunteerRoute.js');
// const RedistributionRequestRouter = require('./routes/redistributionrequestsRt');
// routes
app.get('/', (req, res) => {
  res.json({ mssg: 'Hello World!' });
});

app.use(express.json());
app.use('/volunteers', volunteer);
// app.use('redistributionrequests', redistributionrequests);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose.connection.on('error', (err) => {
  console.log('error', err);
});
