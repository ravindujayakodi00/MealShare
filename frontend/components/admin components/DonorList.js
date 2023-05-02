import React from 'react';

const DonorList = () => {
  const { donors } = props;
  return (
    <div>
      <h2>Donor List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor._id}>
              <td>{donor.name}</td>
              <td>{donor.email}</td>
              <td>{donor.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DonorList;
