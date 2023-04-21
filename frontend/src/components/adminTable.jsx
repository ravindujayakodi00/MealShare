import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function AdminTable({ endpoint, attributes, dataKey }) {
  const [data, setData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        const jsonData = await response.json();
        setData(jsonData[dataKey]); // extract the 'blogs' array from the response
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [endpoint]);

  async function handleEdit(id) {
    // set the editing item id
    setEditingItemId(id);

    // get the current values of the item
    const item = data.find((item) => item._id === id);
    const initialEditedData = {};
    attributes.forEach((attr) => {
      initialEditedData[attr] = item[attr];
    });
    setEditedData(initialEditedData);
  }

  async function handleUpdate(id) {
    try {
      // make the API call to update the item
      const response = await fetch(`${endpoint}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });
      const jsonData = await response.json();
      setData((prevData) =>
        prevData.map((item) => (item._id === id ? jsonData[dataKey] : item))
      );
      setSuccessMsg("Record updated successfully!");
    } catch (error) {
      console.error(error);
    } finally {
      setEditingItemId(null);
    }
  }

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        // make the API call to delete the item
        const response = await fetch(`${endpoint}/${id}`, {
          method: "DELETE",
        });
        const jsonData = await response.json();
        setData((prevData) => prevData.filter((item) => item._id !== id));
        setSuccessMsg("Record deleted successfully!");
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {attributes.map((attr) => (
            <th key={attr} className="px-4 py-2">
              {attr}
            </th>
          ))}
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {attributes.map((attr) => (
              <td key={`${item._id}-${attr}`} className="border px-4 py-2">
                {editingItemId === item._id ? (
                  <input
                    type="text"
                    value={editedData[attr]}
                    onChange={(e) =>
                      setEditedData((prevData) => ({
                        ...prevData,
                        [attr]: e.target.value,
                      }))
                    }
                  />
                ) : (
                  item[attr]
                )}
              </td>
            ))}
            <td className="border px-4 py-2 text-center align-middle">
              {editingItemId === item._id ? (
                <>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setEditingItemId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <FaEdit
                    className="inline-block cursor-pointer mr-2"
                    onClick={() => handleEdit(item._id)}
                  />
                  <FaTrash
                    className="inline-block cursor-pointer"
                    onClick={() => handleDelete(item._id)}
                  />
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
      {successMsg && (
        <tfoot>
          <tr>
            <td colSpan={attributes.length + 1} className="bg-green-100 py-4">
              {successMsg}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export default AdminTable;