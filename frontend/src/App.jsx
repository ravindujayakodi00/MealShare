import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VolunteerPage from './pages/VolunteerPage';
import RedistributionPage from './pages/RedistributionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route
          path="/redistributionrequests"
          element={<RedistributionPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
