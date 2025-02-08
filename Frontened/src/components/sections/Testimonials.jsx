import React from "react";

const Testimonials = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold">What Our Customers Say</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"The best loan service I've ever used. Quick and hassle-free!"</p>
            <h5>- Rahul S.</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"I got my loan approved in just a few hours. Amazing experience!"</p>
            <h5>- Priya M.</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Excellent customer support and very transparent process!"</p>
            <h5>- Ankit K.</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
