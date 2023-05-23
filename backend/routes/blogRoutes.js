const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');

router.route('/').get(blogController.getBlogs);
router.route('/:id').get(blogController.getBlogById);
router.route('/').post(blogController.addBlog);
router.route('/:id').patch( blogController.updateBlog);
router.route('/:id').delete (blogController.deleteBlog);
router.route('/search/:searchTerm').get(blogController.searchBlogs);

module.exports = router;