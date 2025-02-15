import React from "react";
import assets from "../assets/images/assets";

const DJNightCard = ({ title, tagline, manager, director }) => {
  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
      <div className="" style={{ maxWidth: "700px" }}>
        <div className="row ">
          <div className="col-md-6">
            <img
              src={assets.about1} // Update with correct image path
              alt="DJ Night"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col d-flex flex-column justify-content-center p-3">
            <h2 className="fw-bold">{title}</h2>
            <p className="text-muted">{tagline}</p>
            <div>
              <p className="mb-1"><strong>Manager:</strong> {manager.name}</p>
              <p className="mb-1">{manager.email}</p>
              <p className="mb-3">{manager.phone}</p>
              <p className="mb-1"><strong>Director:</strong> {director.name}</p>
              <p className="mb-1">{director.email}</p>
              <p>{director.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJNightCard;
