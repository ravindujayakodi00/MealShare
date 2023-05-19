import React, { useState } from 'react';

const VolunteerForm = ({ addVolunteer }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phoneNo: '',
    availability: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedAvailability = [...formData.availability];

    if (checked) {
      updatedAvailability.push(value);
    } else {
      updatedAvailability = updatedAvailability.filter(
        (item) => item !== value
      );
    }

    setFormData({ ...formData, availability: updatedAvailability });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVolunteer(formData);
    setFormData({
      fname: '',
      lname: '',
      email: '',
      phoneNo: '',
      availability: [],
    });
  };

  return (
    <div>
      <h2>Register Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone No:</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Availability:</label>
          <div>
            <input
              type="checkbox"
              name="availability"
              value="Monday"
              checked={formData.availability.includes('Monday')}
              onChange={handleCheckboxChange}
            />
            <label>Monday</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="availability"
              value="Tuesday"
              checked={formData.availability.includes('Tuesday')}
              onChange={handleCheckboxChange}
            />
            <label>Tuesday</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="availability"
              value="Wednesday"
              checked={formData.availability.includes('Wednesday')}
              onChange={handleCheckboxChange}
            />
            <label>Wednesday</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="availability"
              value="Thursday"
              checked={formData.availability.includes('Thursday')}
              onChange={handleCheckboxChange}
            />
            <label>Thursday</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="availability"
              value="Friday"
              checked={formData.availability.includes('Friday')}
              onChange={handleCheckboxChange}
            />
            <label>Friday</label>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
