import React from "react";
import { Link } from "react-router-dom"; 
import logoimg from "../../assets/images/1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo and Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logoimg} alt="Logo" height="40" />
          <span className="ms-2 fw-bold">EasyFundBuddy</span>
        </Link>

        {/* Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Personal Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <i className="bi bi-person"></i> Personal
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/home-loan">🏠 Home Loan</Link></li>
                <li><Link className="dropdown-item" to="/car-loan">🚗 Car Loan</Link></li>
                <li><Link className="dropdown-item" to="/education-loan">📖 Education Loan</Link></li>
              </ul>
            </li>
            {/* Contact Us Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
