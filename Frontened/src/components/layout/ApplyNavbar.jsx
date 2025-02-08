import React from 'react';
import logoimg from '../../assets/images/1.png';

const ApplyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/">
           <img src={logoimg} alt="Logo" height="40" />
                    <span className="ms-2 fw-bold">EasyFundBuddy</span>
                  </a>

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
                <li><a className="dropdown-item" href="#">🏠 Home Loan</a></li>
                <li><a className="dropdown-item" href="#">🚗 Car Loan </a></li>
                <li><a className="dropdown-item" href="#">📖 Education Loan</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
            <li className="nav-item ms-2">
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ApplyNavbar;
