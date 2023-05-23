const Comment = require("../models/Comment");
const Event = require("../models/Event");

// add comment to event by id
const addComment = async (req, res) => {
  const { eventId } = req.params;
  const { user, text, sentiment } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    // Create a new comment
    const comment = new Comment({ user, text, sentiment, event: eventId });

    const savedComment = await comment.save();

    // Add comment to event's comments array
    event.comments.push(savedComment._id);
    await event.save();

    res.json({ success: true, comment: savedComment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// get comments by event id
const getCommentsByEventId = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId).populate('comments');
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    res.json({ success: true, comments: event.comments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// get comment by id
const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ success: false, error: "Comment not found" });
    }

    res.json({ success: true, comment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// update comment by id
const updateComment = async (req, res) => {
  const { eventId, commentId } = req.params;
  const { user, text, sentiment } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, error: "Comment not found" });
    }

    // Update comment data
    comment.user = user || comment.user;
    comment.text = text || comment.text;
    comment.sentiment = sentiment || comment.sentiment;

    const savedComment = await comment.save();
    res.json({ success: true, comment: savedComment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// delete comment by id
const deleteComment = async (req, res) => {
  const { eventId, commentId } = req.params;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, error: "Comment not found" });
    }

    // Remove comment from event's comments array
    event.comments.pull(commentId);
    await event.save();

    // Delete comment from Comment collection
    await Event.findByIdAndDelete(commentId);

    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  addComment,
  getCommentsByEventId,
  getCommentById,
  updateComment,
  deleteComment,
};
