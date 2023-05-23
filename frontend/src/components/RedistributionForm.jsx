import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RedistributionForm.css';

const RedistributionForm = ({ onFormSubmit }) => {
  const [donor, setDonor] = useState('');
  const [donation, setDonation] = useState('');
  const [request, setRequest] = useState('');
  const [volunteer, setVolunteer] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      donor,
      donation,
      request,
      volunteer,
      location,
      status,
    };

    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post(
        'http://localhost:8000/redistribution',
        formData
      );

      // Call the onFormSubmit function with the form data and the response from the server
      onFormSubmit(formData, response.data);

      // Reset form fields
      setDonor('');
      setDonation('');
      setRequest('');
      setVolunteer('');
      setStatus('');
      setLocation('');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="redistribution-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Redistribution Request</h2>
      <div className="form-field">
        <label htmlFor="donor">Donor</label>
        <input
          type="text"
          id="donor"
          value={donor}
          onChange={(e) => setDonor(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="donation">Donation Request</label>
        <input
          type="text"
          id="donation"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="request">Request</label>
        <input
          type="text"
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="volunteer">Volunteer</label>
        <input
          type="text"
          id="volunteer"
          value={volunteer}
          onChange={(e) => setVolunteer(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="location">Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="button-card">
        <button className="button-submit" type="submit">
          Submit
        </button>
        <br />
        <Link to="RedistributionTable">
          <button className="button-allrecords">All Records</button>
        </Link>
      </div>
    </form>
  );
};

export default RedistributionForm;
