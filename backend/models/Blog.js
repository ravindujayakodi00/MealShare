const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define blog post schema
const blogPostSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  images: [{ type: String }]
});

// Create model based on the defined schema
const Blog = mongoose.model('Blog', blogPostSchema);

module.exports = Blog;