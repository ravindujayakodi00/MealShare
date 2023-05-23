import React, { useEffect, useState } from 'react';
import EventDetails from '../components/eventDetails';
import BlogPost from '../components/blogPost';
import { Hero01 } from '../assets';

function Education() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs when the component mounts
    const fetchBlogData = async () => {
      try {
        const response = await fetch('http://localhost:8000/blogs/');
        console.log('Response:', response); // Debugging statement
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const blogData = await response.json();
        console.log('Blog data:', blogData); // Debugging statement
        setBlogs(blogData.blogs); // Update with the array of blogs
      } catch (error) {
        console.error('Error:', error); // Log the specific error
        setBlogs([]); // Set blogs to an empty array to avoid the "map" error
      }
    };

    fetchBlogData();
  }, []);

  const event = {
    id: "641dccbcf5f2195ae8e7c610",
    title: "Sample Event",
    location: "Sample Location",
    date: "2023-05-20",
    description: "This is a sample event description.",
    image: Hero01,
  };

  return (
    <div>
      <EventDetails event={event} />
      <BlogPost blogPosts={blogs} />
      

    </div>
  );
}

export default Education;
