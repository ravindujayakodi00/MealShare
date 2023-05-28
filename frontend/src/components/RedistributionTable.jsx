import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RedistributionTable.css';
import { toast } from 'react-toastify';
import { FormGroup, Modal } from 'react-bootstrap';

const RedistributionTable = ({ onUpdate, onDelete }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [donor, setDonor] = useState('');
  const [donation, setDonation] = useState('');
  const [request, setRequest] = useState('');
  const [volunteer, setVolunteer] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/redistribution/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (item) => {
    const updatedItem = {
      donor: item.donor,
      donation: item.donation,
      volunteer: item.volunteer,
      request: item.request,
      location: item.location,
      status: item.status,
    };

    try {
      const response = await axios.put(
        `http://localhost:8000/redistribution/${item._id}`,
        updatedItem
      );
      onUpdate(response.data);
      toast.success('Details updated successfully!');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:8000/redistribution/${id}`);
      onDelete(id);
      toast.success('Details deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container">
      <table className="distribute-table">
        <thead>
          <tr className="table-header">
            <th className="thead">Donor</th>
            <th className="thead">Donation</th>
            <th className="thead">Request</th>
            <th className="thead">Volunteer</th>
            <th className="thead">Status</th>
            <th className="thead">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="trecord">{item.donor}</td>
                <td className="trecord">{item.donation}</td>
                <td className="trecord">{item.request}</td>
                <td className="trecord">{item.volunteer}</td>
                <td className="trecord">{item.status}</td>
                <td className="button-card">
                  <button
                    className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleUpdate(item)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(item._id)}
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
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Update Distribute Details</Modal.Title>
    </Modal.Header>

    <Modal.Body>
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
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          EditUser(EveItem);
        }}
      >
        Update Status
      </Button>
    </Modal.Footer>
  </Modal>;
};

export default RedistributionTable;
