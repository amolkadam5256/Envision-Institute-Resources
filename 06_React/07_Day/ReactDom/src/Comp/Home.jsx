import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <section className="hero-section d-flex align-items-center text-center text-white">
            <div className="container">
                <h1 className="display-4 fw-bold">Welcome to Our Website</h1>
                <p className="lead">
                    Build something amazing with the power of technology.
                </p>
                <a href="#services" className="btn btn-primary btn-lg">
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default Home;
