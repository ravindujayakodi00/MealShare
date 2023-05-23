import React from 'react';

function Navigationadmin() {
  return (
    <nav className="admin-navbar">
      <ul className="admin-navbar-nav">
        <li className="admin-nav-item">
          <a href="/admin" className="admin-nav-link">
            <i className="fas fa-home"></i>

            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="admin-nav-item">
          <a href="/redistribution-requests" className="admin-nav-link">
            <i className="fas fa-delivery"></i>

            <span className="link-text">Redistribution Requests</span>
          </a>
        </li>
        <li className="admin-nav-item">
          <a href="/donations" className="admin-nav-link">
            <i className="fas fa-delivery"></i>

            <span className="link-text">Donations</span>
          </a>
        </li>
        <li className="admin-nav-item">
          <a href="/requests" className="admin-nav-link">
            <i className="fas fa-delivery"></i>

            <span className="link-text">Requests</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigationadmin;
