import React from 'react';

const Comment = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div
          key={index}
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
              {/* Use "text-sm" class to make user name smaller */}
              <p className="text-gray-700 font-semibold">{comment.text}</p>
              {/* Use "text-gray-700" class to highlight comment text, and "font-semibold" class to make it bold */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
