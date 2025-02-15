import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "remixicon/fonts/remixicon.css";

const HeroSection = ({ title, subtitle, buttonText }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-white text-center p-4 " style={{ fontFamily: "Poppins, sans-serif" }}>
            <h1 className="display-3 fw-bold mb-3 text-warning">
                <i className="ri-star-smile-fill me-2"></i>{title}
            </h1>
            <p className="lead mb-4 text-light" style={{ maxWidth: "600px" }}>{subtitle}</p>
            <button className="btn btn-warning text-dark fw-semibold shadow-lg px-4 py-2 d-flex align-items-center">
                <i className="ri-arrow-right-line me-2"></i> {buttonText}
            </button>
        </div>
    );  
};

const Home = () => {
    return (
        <div>
            <HeroSection
                title="Welcome to Our DJ"       
                subtitle="Providing the best services for your needs."
                buttonText="Get Started"
            />
        </div>          
    );
};              

export default Home;                                                                    