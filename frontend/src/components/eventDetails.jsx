import React, { useEffect, useState } from "react";
import EventSuccess from "./EventSuccess";

import "tailwindcss/tailwind.css";

const EventDetails = ({ event }) => {
  const [comments, setComments] = useState([]);
  const [successPercentage, setSuccessPercentage] = useState(0);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(`http://localhost:8000/comments/${event.id}`);
        const data = await response.json();
        setComments(data.comments);
        console.log(data.comments);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchSuccessPercentage() {
      try {
        const response = await fetch(`http://localhost:8000/commentAnalyzer/${event.id}`);
        const data = await response.json();
        setSuccessPercentage(data.percentage);
        console.log(data.percentage);
      } catch (error) {
        console.error(error);
      }
    }

    fetchComments();
    fetchSuccessPercentage();
  }, [event.id]);

  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg flex flex-wrap sm:flex-nowrap">
      <div className="w-full flex justify-center">
        <img src={event.image} alt="Event" className="h-full w-full object-cover" />
      </div>
      <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-1">{event.title}</h3>
        <div className="flex flex-row items-center mb-4">
          <p className="mr-4 text-sm text-gray-500">{event.location}</p>
          <p className="text-sm text-gray-500">{event.date}</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">{event.description}</p>
      </div>
      <div className="w-full sm:w-1/3 flex items-center justify-center">
        <EventSuccess successPercentage={successPercentage} />
      </div>
      <div className="w-full p-4 mt-auto">
        <CommentList comments={comments} />
        <AddComment eventId={event.id} onAddComment={handleAddComment} />
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleComments = () => {
    setExpanded(!expanded);
  };

  const reversedComments = [...comments].reverse();
  const visibleComments = expanded ? reversedComments : reversedComments.slice(0, 2);

  return (
    <div>
      {visibleComments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white shadow overflow-hidden sm:rounded-lg mb-4 p-4"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={comment.avatarUrl}
                alt="User Avatar"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">{comment.user}</h3>
              <p className="text-gray-700 font-semibold">{comment.text}</p>
            </div>
          </div>
        </div>
      ))}
      {!expanded && comments.length > 2 && (
        <button className="text-blue-500" onClick={toggleComments}>
          Show more comments
        </button>
      )}
      {expanded && comments.length > 2 && (
        <button className="text-blue-500" onClick={toggleComments}>
          Show less comments
        </button>
      )}
    </div>
  );
};

const AddComment = ({ eventId, onAddComment }) => {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
    setErrorMessage("");
  };

  const handleAddComment = async () => {
    if (text.trim() === "") {
      setErrorMessage("Please enter a comment.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/comments/${eventId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: "Manjula Prashan",
          text,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        onAddComment(data.comment);
        setText("");
        alert("Comment added successfully");
      } else {
        console.error("Failed to add comment:", data.error);
      }
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4 p-4">
      <div className="flex items-start">
        <img
          className="h-10 w-10 rounded-full mr-4"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <div className="w-full">
          <textarea
            className="w-full bg-gray-100 px-4 py-2 mt-2 rounded-md"
            placeholder="Add a comment"
            rows="3"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <button
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
