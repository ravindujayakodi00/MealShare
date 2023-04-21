import React from "react";
import "./index.css";
import EndedEventDeatils from "./components/EventSuccess";
import SearchBar from "./components/searchBar";
import Comment from "./components/comment";
import EventDetails from "./components/eventDetails";
import AddComment from "./components/addComment";
import { events, blogs, commentsData } from "./constants";
import EventSuccess from "./components/EventSuccess";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Service from "./components/service";
import Footer from "./components/footer";
import AdminTable from "./components/adminTable";

function App() {
  const endpoints = [
    "http://localhost:8000/events",
    "http://localhost:8000/blogs",
  ];

  return (
    // <div className="bg-gradient-to-r from-green-500 via-green-300 to-yellow-300 w-full overflow-hidden p-5">
    //   <Navbar />
    //   <Hero />
    //   <Stats />
    //   <Service />
    //   <Footer />
    // </div>
    <div>
      <AdminTable endpoint="http://localhost:8000/blogs" attributes={['title', 'content', 'author', 'date']} dataKey={"blogs"}/>
    </div>
  );
}

export default App;
