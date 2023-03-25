const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

router.route('/').get (CommentController.getCommentsByEventId);
router.route('/').post (CommentController.addComment);
router.route('/').patch (CommentController.updateComment);
router.route('/').delete (CommentController.deleteComment);

module.exports = router;