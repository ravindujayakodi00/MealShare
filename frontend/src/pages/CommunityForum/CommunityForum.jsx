import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Navbar from "../../components/navBar";
import SearchBar from "../../components/SearchBar copy";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.postCaption.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="community mt-2 p-5">
      <Navbar />
      <div className="mx-60 mb-4">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-700"
          placeholder="Search by name"
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <CreatePost className="mt-10" />
      {filteredPosts.reverse().map((post) => (
        <Post key={post._id} postId={post._id} post={post} />
      ))}
    </div>
  );
};

export default Community;
