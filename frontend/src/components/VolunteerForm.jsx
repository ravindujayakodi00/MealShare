import React, { useEffect, useState } from 'react';
import './VolunteerForm.css';
import axios from 'axios';

const VolunteerForm = () => {
  //table data
  const [tableData, setTableData] = useState('');

  //Variable Data
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [availability, setAvailability] = useState('');

  //validations
  const [fnameValidations, setFnameValidations] = useState('');
  const [lnameValidations, setLnameValidations] = useState('');
  const [emailValidations, setEmailValidations] = useState('');
  const [phoneNoValidations, setPhoneNoValidations] = useState('');
  const [availabilityValidations, setAvailabilityValidations] = useState('');

  //Get details
  const getAllData = () => {
    axios.get('http://localhost:8000/volunteer').then((response) => {
      setTableData(response.data);
    });
  };
  //save User
  const saveVolunteer = () => {
    const model = {
      fname: fname,
      lname: lname,
      email: email,
      phoneNo: phoneNo,
      availability: availability,
    };
    setFnameValidations('');
    setLnameValidations('');
    setEmailValidations('');
    setPhoneNoValidations('');
    setAvailabilityValidations('');
    if (fname === '') {
      setFnameValidations('First Name is required');
    } else if (lname === '') {
      setLnameValidations('Last Name is required');
    } else if (email === '') {
      setEmailValidations('Email is required');
    } else if (phoneNo === '') {
      setPhoneNoValidations('Phone Number is required');
    } else if (availability === '') {
      setAvailabilityValidations('Availability is required');
    } else {
      axios.post('http://localhost:8000/volunteer', model).then((response) => {
        console.log(response);
        if (response.data.status === 'success') {
          setFname('');
          setLname('');
          setEmail('');
          setPhoneNo('');
          setAvailability('');
          getAllData();
        }
      });
    }
  };

  //Delete Volunteer
  const deleteVolunteer = (id) => {
    axios.delete('http://localhost:8000/volunteer/:id').then((response) => {
      console.log(response);
      getAllData();
    });
  };

  //form load
  useEffect(() => {
    if (!tableData) {
      getAllData();
    }
  }, []);

  //form submit

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic
    // You can make an API request here to save the volunteer information

    // Reset form fields
    setFname('');
    setLname('');
    setEmail('');
    setPhoneNo('');
    setAvailability('');
  };

  return (
    <form className="volunteer-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Become a Volunteer</h2>
      <div className="form-field">
        <label htmlFor="fname"> First Name</label>
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="lname"> Last Name</label>
        <input
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="phoneNo">Phone</label>
        <input
          type="tel"
          id="phoneNo"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="availability">Availability</label>
        <textarea
          id="availability"
          rows="3"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default VolunteerForm;
