import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/sections/Footer";

const HomeLoanApply = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [agreeConsent, setAgreeConsent] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [error, setError] = useState("");
  const [loanError, setLoanError] = useState("");
  const [tenureError, setTenureError] = useState("");
  const navigate = useNavigate();

  const validateLoanAmount = (amount) => {
    if (amount < 25000 || amount > 5000000 || amount % 1000 !== 0) {
      setLoanError("Please enter a valid amount between 25,000 & 50,00,000 (Multiples of 1000)");
    } else {
      setLoanError("");
    }
  };

  const validateLoanTenure = (tenure) => {
    if (tenure < 3 || tenure > 72) {
      setTenureError("Please enter a tenure between 3 and 72 months");
    } else {
      setTenureError("");
    }
  };

  const applyLoan = () => {
    if (!agreeConsent || !agreePrivacy) {
      setError("You must agree to both consents to apply.");
      return;
    }
    if (loanError || tenureError || !loanAmount || !loanTenure) {
      return;
    }

    
    navigate("/apply-now", {
      state: { loanAmount, loanTenure }
    });
  };

  return (
    <main>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="container d-flex justify-content-center align-items-center" style={{ maxWidth: "1200px" }}>
        <div className="row w-100 p-4 shadow-lg rounded">
          {/* Left Section - Loan Description */}
          <div className="col-md-6 p-4 text-dark border-end">
            <h2>Get a  Loan up to</h2>
            <ul>
              <li>Flexible Tenure from 12-72 months</li>
             
              <li>Get your eligibility in a few clicks.</li>
            </ul>
            <h3>Let's get started with your online personal loan application</h3>
          </div>

          {/* Right Section - Loan Amount & Tenure */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-4 text-dark">
            <div className="mb-3">
              <label>Loan Amount</label>
              <input
                type="number"
                className="form-control"
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(e.target.value);
                  validateLoanAmount(Number(e.target.value));
                }}
                placeholder="Enter Loan Amount"
              />
              {loanError && <small className="text-danger d-block mt-1">{loanError}</small>}
              <small className="text-muted">Please enter Loan Amount between 25,000 & 50,00,000 (Multiples of 1000)</small>
            </div>
            <div className="mb-3">
              <label>Loan Tenure (in months)</label>
              <input
                type="number"
                className="form-control"
                value={loanTenure}
                onChange={(e) => {
                  setLoanTenure(e.target.value);
                  validateLoanTenure(Number(e.target.value));
                }}
                placeholder="Enter Loan Tenure"
              />
              {tenureError && <small className="text-danger d-block mt-1">{tenureError}</small>}
            </div>

            

            {/* Consent and Privacy Agreement */}
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeConsent"
                checked={agreeConsent}
                onChange={() => setAgreeConsent(!agreeConsent)}
              />
              <label className="form-check-label" htmlFor="agreeConsent">
                I consent to  Easy Fund Buddy terms regarding information sharing.
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreePrivacy"
                checked={agreePrivacy}
                onChange={() => setAgreePrivacy(!agreePrivacy)}
              />
              <label className="form-check-label" htmlFor="agreePrivacy">
                I agree to Easy Fund Buddy Privacy Commitment.
              </label>
            </div>
            
            {error && <small className="text-danger d-block mt-2">{error}</small>}

            {/* Submit Button */}
            {agreeConsent && agreePrivacy && (
              <button className="btn btn-success mt-3" onClick={applyLoan}>
                I Agree
              </button>
            )}
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    <Footer />
    </main>
  );
};

export default HomeLoanApply;
