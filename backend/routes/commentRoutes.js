const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

router.get('/', CommentController.getCommentsByEventId);
router.post('/', CommentController.addComment);
router.patch('/', CommentController.updateComment);
router.delete('/', CommentController.deleteComment);

module.exports = router;