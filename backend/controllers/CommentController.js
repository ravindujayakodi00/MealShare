const Comment = require('../models/Comment');

// add comment
exports.addComment = async (req, res) => {
  const { user, text, event } = req.body;

  const comment = new Comment({
    user,
    text,
    event
  });

  try {
    const savedComment = await comment.save();
    res.status(201).json({ success: true, comment: savedComment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// get all comments by event id
exports.getCommentsByEventId = async (req, res) => {
    const { eventId } = req.body;
  
    try {
      const comments = await Comment.find({ event: eventId }).populate('user');
      res.status(200).json({ success: true, comments });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

  // update comment by id with in 3 days
exports.updateComment = async (req, res) => {
    const { commentId } = req.body;
    const { text } = req.body;

    try {    
        const updatedComment = await Comment.findByIdAndUpdate(commentId, { text }, { new: true });
        res.status(200).json({ success: true, comment: updatedComment });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// delete comment by id  
    exports.deleteComment = async (req, res) => {
    const { commentId } = req.body;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        res.status(200).json({ success: true, comment: deletedComment });
        }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};