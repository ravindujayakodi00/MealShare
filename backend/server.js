const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
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

// routes
app.get('/', (req, res) => {
	res.json({ mssg: 'Hello World!' });
});

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with the origin of your client application
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
  });


app.use(express.json());
app.use('/comments', require('./routes/commentRoutes'));
app.use('/commentAnalizer', require('./routes/commentAnalizerRoutes'));
app.use('/events', require('./routes/eventRoutes'));
app.use('/blogs', require('./routes/blogRoutes'));

// app.use((req, res, next) => {
// 	console.log(req.path, req.method);
// 	next();
// });

mongoose.connection.on('error', (err) => {
	console.log('error', err);
});
