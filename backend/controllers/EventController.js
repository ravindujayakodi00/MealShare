const Event = require("../models/Event");



// add event
 const addEvent = async (req, res) => {
  const {
    name,
    description,
    startDate,
    endDate,
    status,
    location,
    photos,
    comments,
    success,
  } = req.body;

  const event = new Event({
    name,
    description,
    startDate,
    status,
    endDate,
    location,
    photos,
    comments,
    success,
  });
  try {
    const savedEvent = await event.save();
    res.status(201).json({ success: true, event: savedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// get all events
const getEvents = async (req, res) => {
   const { eventId } = req.body;

  try {
    const events = await Event.find();
    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


// get event by id
const getEventById = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
//update event by id
const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const {
    name,
    description,
    startDate,
    endDate,
    location,
    photos,
    comments,
    success,
  } = req.body;

  try { 
    const updatedEvent = await Event.findByIdAndUpdate(eventId, {
      name,
      description,
      startDate,
      endDate,
      location,
      photos,
      comments,
      success,
    });
    res.status(200).json({ success: true, event: updatedEvent });
  }
  catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// delete event by id
const deleteEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    res.status(200).json({ success: true, event: deletedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  addEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};

