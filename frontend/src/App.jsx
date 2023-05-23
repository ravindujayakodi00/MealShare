import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AdminPage from "./pages/Admin";
import EducationPage from "./pages/Education";  

import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Admin/*" element={<AdminPage />} />
          <Route path="/Education"element={<EducationPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
