import React, { useState } from "react";
import Footer from "../components/sections/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <main>
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center">
            {/* Left Section - Unique App Line */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="fw-bold mb-4 text-primary">"EasyFundBuddy - Your Smart Way to Financial Freedom!"</h1>
              <p className="text-muted">
                Get quick, hassle-free loans with our seamless digital platform.  
                Whether it's for a home, car, or education, we are here to help you!
              </p>
            </div>

            {/* Right Section - Contact Form */}
            <div className="col-md-6">
              <div className="card shadow-lg p-4 contact-box">
                <h2 className="text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

     
    </>
  );
};

export default ContactUs;
