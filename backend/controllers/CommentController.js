const Event = require('../models/Event');

// add comment
const addComment = async (req, res) => {
  const { eventId } = req.params;
  const { author, text } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    const newComment = { author, text };
    event.comments.push(newComment);

    const savedEvent = await event.save();
    res.json({ success: true, event: savedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// get all comments by event id
const getCommentsByEventId = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    res.json({ success: true, comments: event.comments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// update comment by id
const updateComment = async (req, res) => {
  const { eventId, commentId } = req.params;
  const { author, text } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    const comment = event.comments.find((c) => c._id.toString() === commentId);
    if (!comment) {
      return res.status(404).json({ success: false, error: "Comment not found" });
    }

    comment.author = author || comment.author;
    comment.text = text || comment.text;

    const savedEvent = await event.save();
    res.json({ success: true, event: savedEvent });
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

    const filteredComments = event.comments.filter((c) => c._id.toString() !== commentId);
    if (event.comments.length === filteredComments.length) {
      return res.status(404).json({ success: false, error: "Comment not found"
      });
    }

    event.comments = filteredComments;
    const savedEvent = await event.save();
    res.json({ success: true, event: savedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



module.exports = {  
  addComment,
  getCommentsByEventId,
  updateComment,
  deleteComment
};