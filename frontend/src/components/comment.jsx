import React from 'react';

const Comment = ({ username, comment }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4 p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={avatarUrl} alt="User Avatar" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{username}</h3>
          <p className="text-gray-500">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
