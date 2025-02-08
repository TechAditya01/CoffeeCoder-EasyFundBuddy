import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold">Why Choose Us?</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>🏆 Trusted by Thousands</h4>
            <p>We have helped thousands of customers achieve their financial goals.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>🚀 Fast & Easy Process</h4>
            <p>Our application process is simple and quick, saving you time and effort.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>💰 Best Interest Rates</h4>
            <p>We offer competitive interest rates to make your loans affordable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
