import React, { useState } from "react";

const Personal = ({ onDataSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onDataSubmit(formData);
  };

  return (
    <section className="container mb-5">
      <div className="row">
        <div className="col-6 mx-auto text-start">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="fullName" className="form-control" onChange={handleChange} value={formData.fullName} placeholder="Enter your full name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" onChange={handleChange} value={formData.dob} />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-control" onChange={handleChange} value={formData.gender}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input type="text" name="contactNumber" className="form-control" onChange={handleChange} value={formData.contactNumber} placeholder="Enter your phone number" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" name="address" className="form-control" onChange={handleChange} value={formData.address} placeholder="Enter your address" />
          </div>

          <div className="text-center">
            <button type="button" onClick={handleSubmit} className="btn btn-primary">
              Send Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
