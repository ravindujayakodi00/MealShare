import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import HomePage from './pages/home';
import AdminPage from './pages/Admin';
import EducationPage from './pages/Education';
import SelectType from './pages/Donors/SelectType';
import PersonalDetails from './pages/Donors/Personal';
import BusinessDetails from './pages/Donors/Business';
import SelectItems from './pages/Donors/SelectItems';
import DonorAdmin from './pages/AdminPanel/DonorsAdmin';
import BusinessDonorAdmin from './pages/AdminPanel/BusinessDonerAdmin';
import UpdateForm from './components/UpdateForm';
import Login from './pages/AuthPages/Login';
import Signup from './pages/AuthPages/SignUp';
import Community from './pages/CommunityForum/CommunityForum';
import UpdatePost from './pages/CommunityForum/UpdatePost';
import NotFound from './pages/404';

// import './index.css';
// import Redistribution from './pages/Redistribution';
// import RedistributionTable from './components/RedistributionTable';

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <div className="App bg-gradient-to-r from-green-500 via-green-300 to-yellow-300 w-full overflow-hidden ">
        <Routes>
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/Admin/*" element={<AdminPage />} />
          <Route
            path="/Education"
            element={user ? <EducationPage /> : <Navigate to="/login" />}
          />
          <Route path="/admin/donor" element={<DonorAdmin />} />
          <Route path="/admin/business" element={<BusinessDonorAdmin />} />
          <Route path="/donors" element={<SelectType />} />
          <Route path="/donors/personal" element={<PersonalDetails />} />
          <Route path="/donors/business" element={<BusinessDetails />} />
          <Route path="/donors/selectitems" element={<SelectItems />} />
          <Route path="/admin/donor/:id" element={<UpdateForm />} />
          <Route path="/community" element={!user ? <Login /> : <Community />} />  
          <Route path="/update/:id" element={<UpdatePost />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route
            path="/Admin/distribute-management"
            element={<Redistribution />}
          />
          <Route
            path="/Admin/distribute-management/RedistributionTable"
            element={<RedistributionTable />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
