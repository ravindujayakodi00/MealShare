import React, { useState } from 'react';
import 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';

const CommentsSection = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [successCount, setSuccessCount] = useState(50);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add comment to database
    setSuccessCount(successCount + 1);
  };

  const chartData = {
    labels: ['Success', 'Failure'],
    datasets: [
      {
        data: [successCount, comments.length - successCount],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverBackgroundColor: ['#81c784', '#e57373'],
      },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    width: '40px',
    height: '40px'
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="flex justify-end px-4 py-5 sm:px-6">
        <Doughnut options={chartOptions} data={chartData} />
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Comments</h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="new-comment" className="sr-only">
              New comment
            </label>
            <textarea
              id="new-comment"
              name="new-comment"
              rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
            />
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add comment
            </button>
          </div>
        </form>
      </div>
      <div className="comments-container h-64 overflow-auto">
        {comments.map((comment) => (
          <div key={comment.id} className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h4 className="text-md leading-6 font-medium text-gray-900">{comment.user}</h4>
            <p className="text-sm text-gray-500">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
