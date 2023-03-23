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

app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

mongoose.connection.on('error', (err) => {
	console.log('error', err);
});
