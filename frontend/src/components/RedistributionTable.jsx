import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './redistributionTable.css';

const RedistributionTable = ({ onUpdate, onDelete }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // Make a GET request to fetch the data
      const response = await axios.get('http://localhost:8000/redistribution/');
      // Set the data
      setData(response.data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const handleUpdate = async (item) => {
    try {
      // Make a PUT request to update the item on the backend
      await axios.put(`http://localhost:8000/redistribution/${item.id}`, item);
      onUpdate(item);
    } catch (error) {
      // Handle error
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to delete the item on the backend
      await axios.delete(`http://localhost:8000/redistribution/:id`);
      onDelete(id);
    } catch (error) {
      // Handle error
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container">
      <table className="w-full border-collapse">
        <thead>
          <tr className="table-header">
            <th className="py-2 px-4">Donor</th>
            <th className="py-2 px-4">Donation Request</th>
            <th className="py-2 px-4">Request</th>
            <th className="py-2 px-4">Volunteer</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.donor}</td>
                <td className="py-2 px-4">{item.donation}</td>
                <td className="py-2 px-4">{item.request}</td>
                <td className="py-2 px-4">{item.volunteer}</td>
                <td className="py-2 px-4">{item.status}</td>
                <td className="button-card">
                  <button
                    className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleUpdate(item)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RedistributionTable;
