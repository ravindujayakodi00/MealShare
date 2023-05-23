import React from 'react';

const BlogPost = ({ blogPosts }) => {
  return (
    <div className="pt-5"> 
      {blogPosts.map((blogPost) => (
        <div
          key={blogPost.id} // Add the key prop here using a unique identifier
          className="bg-white shadow overflow-hidden sm:rounded-lg flex mb-4"
        >
          <div className="w-1/3 pr-4">
            {blogPost.images.map((image) => (
              <img
                src={image}
                alt={blogPost.title}
                className="h-full w-full object-cover"
                key={image}
              />
            ))}
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-1">
                {blogPost.title}
              </h3>
              <p className="text-sm text-gray-500">By {blogPost.author}</p>
            </div>
            <p className="mt-2 text-sm text-gray-500">{blogPost.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
