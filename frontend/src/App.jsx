import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AdminPage from './pages/Admin';

import './index.css';
import Redistribution from './pages/Redistribution';
import RedistributionTable from './components/RedistributionTable';
import Volunteers from './pages/Volunteers';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Admin/*" element={<AdminPage />} />
          <Route
            path="/Admin/distribute-management"
            element={<Redistribution />}
          />
          <Route
            path="/Admin/distribute-management/RedistributionTable"
            element={<RedistributionTable />}
          />
          <Route path="/Admin/volunteer-management" element={<Volunteers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
