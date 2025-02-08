import { useState } from "react";
import LoanOptions from "../components/Loan/LoanOptions";
import HomeLoan from "../components/Loan/HomeLoan";
import CarLoan from "../components/Loan/CarLoan";
import EducationLoan from "../components/Loan/EducationLoan";
import ChatBot from "../components/chat/ChatBot";
import ApplyNavbar from "../components/layout/ApplyNavbar";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/sections/Footer";

// Import images
import HomeLoanImg from "../assets/images/3.jpg";
import CarLoanImg from "../assets/images/4.webp";
import EducationLoanImg from "../assets/images/5.jpg";

const Apply = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <ApplyNavbar />

      <main className="flex-grow-1 pt-5 mt-5">
        <div className="container">
   
          <div className="text-center mb-4">
            <h2 className="text-primary">Choose a Loan Option</h2>
          </div>

   
          <div className="row g-4">
            
            <div className="col-md-4 text-center">
              <img src={HomeLoanImg} alt="Home Loan" className="img-fluid w-75 rounded mb-3" />
              <HomeLoan />
            </div>

            
            <div className="col-md-4 text-center">
              <img src={CarLoanImg} alt="Car Loan" className="img-fluid w-75 rounded mb-3" />
              <CarLoan />
            </div>

            {/* Education Loan */}
            <div className="col-md-4 text-center">
              <img src={EducationLoanImg} alt="Education Loan" className="img-fluid w-75 rounded mb-3" />
              <EducationLoan />
            </div>
          </div>
        </div>

        {/* Why Choose Us & Testimonials Section */}
        <section className="bg-light py-5 mt-5">
          <div className="container">
            <div className="mb-5">
              <WhyChooseUs />
            </div>
            <div>
              <Testimonials />
            </div>
          </div>
        </section>

        <div className="position-fixed bottom-0 end-0 mb-4 me-4">
  {!isChatOpen ? (
    <button
      className="btn btn-primary rounded-pill px-3 py-2 shadow-lg fw-bold"
      onClick={() => setIsChatOpen(true)}
    >
      May I help here?
    </button>
  ) : (
    <ChatBot onClose={() => setIsChatOpen(false)} />
  )}
</div>


        <Footer />
      </main>
    </>
  );
};

export default Apply;
