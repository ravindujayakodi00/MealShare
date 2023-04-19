import React, { useState } from 'react';
import axios from 'axios';

const AddComment = ({ eventId, userName }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddComment = async () => {
    try {
      await axios.post(`/${eventId}`, { user: userName, text });
      setText('');
      // Handle success response
    } catch (error) {
      console.error('Failed to add comment:', error);
      // Handle error response
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
          <p className="text-gray-500">{userName}</p>
          <textarea
            className="w-full bg-gray-100 px-4 py-2 mt-2 rounded-md"
            placeholder="Add a comment"
            rows="3"
            value={text}
            onChange={handleTextChange}
          ></textarea>
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

export default AddComment;
