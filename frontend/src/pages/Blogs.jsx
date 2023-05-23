import React from "react";
import AdminTable from "../components/adminTable";
import AddBlogForm from "../components/addBlog";
import SearchBar from "../components/searchBar";
function BlogsPage() {
    return (
      <div>
        <SearchBar endpoints={["http://localhost:8000/blogs"]} />
        <AdminTable endpoint={"http://localhost:8000/blogs"} attributes={["title","author","content"]} dataKey={"blogs"} />
        <AddBlogForm />
    </div>   
    );
  }
  export default BlogsPage;