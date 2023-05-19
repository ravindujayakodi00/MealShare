import React, { useState } from 'react';
import './RedistributionForm.css';

const RedistributionForm = () => {
  const [donation, setDonation] = useState('');
  const [request, setRequest] = useState('');
  const [volunteer, setVolunteer] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic
    // You can make an API request here to save the redistribution request information

    // Reset form fields
    setDonation('');
    setRequest('');
    setVolunteer('');
    setStatus('');
  };

  return (
    <form className="redistribution-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Redistribution Request</h2>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default RedistributionForm;
