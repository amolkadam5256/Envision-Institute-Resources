import { assets } from "../assets/images/assets";
const Navbar = ({ links, backgroundColor }) => {
    return (
        <nav
            className="navbar navbar-expand-lg p-3 shadow-lg glassmorphism"
            style={{ backgroundColor: backgroundColor || "rgba(255, 255, 255, 0.2)" }}
        >
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold animate-logo" href="#">
                    <img src={assets.logo1} alt="Logo" width="70" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon animated-toggler"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto list-unstyled d-flex gap-4">
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    href={link.href}
                                    className="nav-link text-white text-decoration-none nav-hover"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Icons */}
                    <div className="d-flex gap-3">
                        {["instagram", "facebook", "twitter", "youtube"].map((platform) => (
                            <a key={platform} href="#" className="text-white fs-5 social-icon">
                                <i className={`bi bi-${platform}`}></i>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
