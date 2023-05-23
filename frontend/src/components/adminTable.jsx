import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import jsPDF from "jspdf";

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
      const response = await fetch(`${endpoint}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update the item.");
      }

      const jsonData = await response.json();

      setData((prevData) =>
        prevData.map((item) => (item._id === id ? jsonData[dataKey] : item))
      );

      setSuccessMsg("Record updated successfully!");
      window.location.reload();
      setEditingItemId(null);
    } catch (error) {
      console.error(error);
      // Handle the error, show an error message, or perform any necessary actions
    }
  }

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        // make the API call to delete the item
          await fetch(`${endpoint}/${id}`, {
          method: "DELETE",
        });
        
        setData((prevData) => prevData.filter((item) => item._id !== id));
        setSuccessMsg("Record deleted successfully!");
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  }

  function downloadPDF() {
    let timerInterval;

    Swal.fire({
      title: "Preparing your PDF",
      html: "Please wait <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    })
      .then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      })
      .then(() => {
        const doc = new jsPDF("p", "pt", "a4");

    
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
     
        const columns = attributes.map((attr) => ({
          header: attr,
          dataKey: attr,
        }));

        doc.autoTable({
          columns,
          body: data.map((item) => {
            const rowData = {};
            attributes.forEach((attr) => {
              rowData[attr] = item[attr];
            });
            return rowData;
          }),
          startY: pageHeight - 700,
          theme: "grid",
        });

        let today = new Date();
        const curr_date = today.getDate();
        const curr_month = today.getMonth();
        const curr_year = today.getFullYear();
        today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
        let newdat = today;

        doc.text(newdat, 450, 108);

        doc.save("Blogs.pdf");
      });
  }

  return (
    <div>
      <button className="rounded-xl bg-gray-400 px-2 py-1" onClick={downloadPDF}>Generate Report</button>
      <table className="table-auto w-full p-5">
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
    </div>
  );
}

export default AdminTable;
