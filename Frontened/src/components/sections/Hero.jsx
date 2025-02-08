import React from "react";
import { useNavigate } from "react-router-dom";
import bankingImage from "../../assets/images/2.avif"; 

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section position-relative bg-light overflow-hidden">
      <div className="container-fluid">
        <div className="row min-vh-100 align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-5 py-5 px-5">
            <div className="pe-lg-5">
              <p className="text-primary fw-semibold mb-3">PERSONAL BANKING</p>
              <h1 className="display-4 fw-bold text-navy mb-4" style={{ color: '#003366' }}>
                Award-winning banking at your fingertips
              </h1>
              <p className="lead text-muted mb-5">
                Our Rewards Checking account, competitive CDs, and new LevelUp Savings account will help you meet your goals.
              </p>
              <button className="btn btn-danger btn-lg px-4 py-3" onClick={() => navigate("/apply")}>
                Apply Now
              </button>
            </div>
          </div>

          {/* Right Image - Full Cover */}
          <div className="col-lg-7 d-none d-lg-block position-relative p-0">
            <div className="w-100 h-100">
              <img
                src={bankingImage}
                alt="Happy banking customers"
                className="img-fluid"
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;
