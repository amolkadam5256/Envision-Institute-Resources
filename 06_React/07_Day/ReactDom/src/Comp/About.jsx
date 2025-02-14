import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section className="about-section text-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98RmHOC6BYQlquXSHYFqtbkccwHCZaWFNTg&s"
              alt="Profile"
              className="rounded-circle mb-3"
            />
            <h2 className="fw-bold">About Me</h2>   
            <p className="lead text-muted">
              Passionate about building creative and efficient digital solutions.
              Always learning, always growing.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
