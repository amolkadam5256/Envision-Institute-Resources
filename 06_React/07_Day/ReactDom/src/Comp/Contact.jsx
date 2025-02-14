import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
        <p className="text-center text-muted">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <h5>Follow Me</h5>
          <a
            href="https://github.com/amolkadam5256"
            className="btn btn-dark mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/amolkadam"
            className="btn btn-primary mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:amolkadam1274@gmail.com"
            className="btn btn-danger mx-2"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
