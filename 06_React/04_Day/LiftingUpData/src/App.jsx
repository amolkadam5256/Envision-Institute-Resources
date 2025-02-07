import React, { useState } from "react";
import Personal from "./Personal";

const App = () => {
  const [personalDataList, setPersonalDataList] = useState([]);

  const handlePersonalData = (data) => {
    setPersonalDataList((prevData) => [...prevData, data]); // Add new entry to the array
    console.log("Updated List:", personalDataList);
  };

  return (
    <div className="container">
      <h2 className="text-center">Personal Information</h2>
      <Personal onDataSubmit={handlePersonalData} />

      {personalDataList.length > 0 && (
        <div className="mt-4 p-3 border">
          <h4>Preview Data:</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Full Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {personalDataList.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.fullName || "N/A"}</td>
                  <td>{data.dob || "N/A"}</td>
                  <td>{data.gender || "N/A"}</td>
                  <td>{data.contactNumber || "N/A"}</td>
                  <td>{data.email || "N/A"}</td>
                  <td>{data.address || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
