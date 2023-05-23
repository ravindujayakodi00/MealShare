const Sentiment = require('sentiment');
const Comment = require("../models/Comment");
const Event = require("../models/Event");

// Fetch comments data from the post (replace with your own code to fetch comments)
const fetchCommentsByEventId = async (eventId) => { // Remove 'res' parameter
  let result = null; // Define a variable to store the result
  try {
    const event = await Event.findById(eventId).populate('comments');
    if (!event) {
      // Set the result and return early
      result = { success: false, error: "Event not found" };
      return result;
    }

    result = event.comments;
    
  } catch (error) {
    // Handle error and set the result
    result = null;
  }

  // Return the result
  return result;
};
  

// Define criteria for "good" or positive comments
const sentimentThreshold = 3; // You can adjust this threshold based on your criteria

// Function to calculate percentage of positive comments
const calculatePositiveCommentsPercentage = (comments) => {
  // Parse and filter comments
  const sentiment = new Sentiment();
  const positiveComments = comments.filter(comment => {
    const { score } = sentiment.analyze(comment.text);
    return score > sentimentThreshold;
  });

  // Calculate percentage
  const totalComments = comments.length;
  const positiveCommentsCount = positiveComments.length;
  const percentage = (positiveCommentsCount / totalComments) * 100;

  // Return percentage
  return percentage.toFixed(2);
};

// Controller function to get percentage of positive comments for an event
const getPercentageOfPositiveComments = async (req, res) => {
  const { eventId } = req.params;
  try {
    // Fetch comments by eventId
    const comments = await fetchCommentsByEventId(eventId, res);
    // Call the function with the fetched comments
    const percentage = calculatePositiveCommentsPercentage(comments);
    res.json({ success: true, percentage });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getPercentageOfPositiveComments,
};
