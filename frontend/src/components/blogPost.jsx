import React from 'react';

const BlogPostDetails = ({ images, title, author, content }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg flex">
      <div className="w-1/3">
        {images.map(image => (
          <img src={image} alt={title} className="h-full w-full object-cover" key={image} />
        ))}
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500">By {author}</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {content}
        </p>
      </div>
    </div>
  );
};

export default BlogPostDetails;

