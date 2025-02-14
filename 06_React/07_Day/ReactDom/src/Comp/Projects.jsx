import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    title: "DoctorDom App",
    description: "A full-stack MERN doctor appointment booking system.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98RmHOC6BYQlquXSHYFqtbkccwHCZaWFNTg&s",
    link: "https://github.com/amolkadam5256/DoctorDom-App",
  },
  {
    id: 2,
    title: "Gym Reservation Bot",
    description: "Automated gym slot booking using Python and Selenium.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98RmHOC6BYQlquXSHYFqtbkccwHCZaWFNTg&s",
    link: "https://github.com/amolkadam5256/gym-reservation-bot",
  },
  {
    id: 3,
    title: "Ticket Price Calculator",
    description: "Android app to calculate museum trip ticket prices.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98RmHOC6BYQlquXSHYFqtbkccwHCZaWFNTg&s",
    link: "https://github.com/amolkadam5256/ticket-price-calculator",
  },
];

const Projects = () => {
  return (
    <section className="projects-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
