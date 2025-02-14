import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

function App() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    email: "",
    phone_number: "",
    address: "",
  });

  const [items, setItems] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Send data to API
  const sendData = async () => {
    try {
      const response = await axios.post(
        "https://67a9c43c6e9548e44fc4c6a9.mockapi.io/StudentDB",
        user
      );
      setItems([...items, response.data]);
      setUser({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        gender: "",
        email: "",
        phone_number: "",
        address: "",
      }); // Reset fields
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  // Fetch data from API
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://67a9c43c6e9548e44fc4c6a9.mockapi.io/StudentDB"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center">React Axios CRUD Example - MockAPI</h3>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow-lg">
              <h5 className="text-center mb-4">User Information</h5>
              <input
                type="text"
                className="form-control mb-2"
                name="first_name"
                placeholder="First Name"
                value={user.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control mb-2"
                name="last_name"
                placeholder="Last Name"
                value={user.last_name}
                onChange={handleChange}
              />
              <input
                type="date"
                className="form-control mb-2"
                name="date_of_birth"
                value={user.date_of_birth}
                onChange={handleChange}
              />
              <select
                className="form-control mb-2"
                name="gender"
                value={user.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="email"
                className="form-control mb-2"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control mb-2"
                name="phone_number"
                placeholder="Phone Number"
                value={user.phone_number}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                name="address"
                placeholder="Address"
                value={user.address}
                onChange={handleChange}
              />
              <div className="d-flex justify-content-between">
                <button className="btn btn-success" onClick={sendData}>
                  Add User
                </button>
                <button className="btn btn-outline-primary" onClick={getData}>
                  Load Users
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <table className="table mt-5 text-center table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td>{i.first_name}</td>
                <td>{i.last_name}</td>
                <td>{i.date_of_birth}</td>
                <td>{i.gender}</td>
                <td>{i.email}</td>
                <td>{i.phone_number}</td>
                <td>{i.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
