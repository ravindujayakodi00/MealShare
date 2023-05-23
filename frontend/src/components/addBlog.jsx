import React, { useState } from "react";
import axios from "axios";

const AddBlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/blogs/", {
        title,
        author,
        content,
      });

      // Handle success or perform any necessary actions after creating the blog post
      console.log("Blog post created:", response.data);
      alert("Blog post created!");
      window.location.reload();

      // Reset the form fields
      setTitle("");
      setAuthor("");
      setContent("");
    } catch (error) {
      // Handle error or show an error message to the user
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto flex justify-center p-5">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 ">Add Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="author" className="block font-medium">
              Author
            </label>
            <input
              type="text"
              id="author"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block font-medium">
              Content
            </label>
            <textarea
              id="content"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;
