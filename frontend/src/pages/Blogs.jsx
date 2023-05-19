import React from "react";
import AdminTable from "../components/adminTable";
function BlogsPage() {
    return (
      <div>
        <AdminTable endpoint={"http://localhost:8000/blogs"} attributes={["title","author","content"]} dataKey={"blogs"} />
    </div>   
    );
  }
  export default BlogsPage;