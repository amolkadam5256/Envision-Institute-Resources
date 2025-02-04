import React from 'react';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">{props.brand}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                props.links.map((item, index) => (
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link" href={item.href}>{item.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
