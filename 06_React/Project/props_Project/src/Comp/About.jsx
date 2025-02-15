import React from "react";
import assets from "../assets/images/assets";

const About = () => {
  const eventName = "DJ Night Extravaganza";
  const description = "An electrifying night with top DJs spinning the best beats!";
  const team = [
    { name: "DJ Thunder", role: "Lead Performer" },
    { name: "MC Blaze", role: "Host" },
    { name: "DJ Sonic", role: "Guest DJ" }
  ];
  const highlights = [
    { title: "Fireworks Show",   description: "A spectacular display of lights and colors!" },
    { title: "Live Visuals", description: "Immersive 3D visuals synchronized to the beats." }
  ];

  return (
    <div className="about-section container-fluid mt-5 p-5 rounded shadow-lg">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold">About {eventName}</h1>
        <p className="lead">{description}</p>
        <a href="#tickets" className="btn btn-primary mt-3">Get Tickets</a>
      </div>
      
      <div className="row">
        <div className="col-lg-6">
          <h2 className="fw-bold">Meet the Team</h2>
          <ul className="list-group">
            {team.map((member, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {member.name} <span className="badge bg-primary">{member.role}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold">Event Highlights</h2>
          <div className="row g-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="col-md-6">
                <div className="card shadow-sm">
                  <img src={assets.event1} className="card-img-top" alt={highlight.title} />
                  <div className="card-body">
                    <h5 className="card-title">{highlight.title}</h5>
                    <p className="card-text">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="social-media-links text-center mt-4">
        <h5>Follow Us</h5>
        <a href="#" className="me-3"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="#" className="me-3"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="#" className="me-3"><i className="fab fa-twitter fa-2x"></i></a>
      </div>
    </div>
  );
};

export default About;