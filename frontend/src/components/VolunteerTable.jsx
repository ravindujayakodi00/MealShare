import React, { useState } from 'react';
import './VolunteerTable.css';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);

  // Function to update a volunteer's information
  const updateVolunteer = (id, updatedVolunteer) => {
    const updatedList = volunteers.map((volunteer) => {
      if (volunteer.id === id) {
        return { ...volunteer, ...updatedVolunteer };
      }
      return volunteer;
    });
    setVolunteers(updatedList);
  };

  // Function to delete a volunteer
  const deleteVolunteer = (id) => {
    const updatedList = volunteers.filter((volunteer) => volunteer.id !== id);
    setVolunteers(updatedList);
  };

  return (
    <div className="container">
      <h2 className="Table-header"> Volunteer List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="table-header">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone No</th>
            <th className="py-2 px-4">Availability</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td className="py-2 px-4">
                {volunteer.fname} {volunteer.lname}
              </td>
              <td className="py-2 px-4">{volunteer.email}</td>
              <td className="py-2 px-4">{volunteer.phoneNo}</td>
              <td className="py-2 px-4">{volunteer.availability.join(', ')}</td>
              <td>
                <button
                  className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() =>
                    updateVolunteer(volunteer.id, { fname: 'Updated Name' })
                  }
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteVolunteer(volunteer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerList;
