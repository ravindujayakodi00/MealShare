const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController');


router.route('/:eventId').get(commentController.getCommentsByEventId);
router.route('/getone/:id').get(commentController.getCommentById);
router.route('/:eventId').post(commentController.addComment);
router.route('/:eventId/:commentId').patch( commentController.updateComment);
router.route('/:eventId/:commentId').delete (commentController.deleteComment);

module.exports = router;
