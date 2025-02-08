import { useNavigate } from "react-router-dom";

const HomeLoan = () => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Home Loan </h2>
        
        <div className="row mb-4">
          <div className="col-md-6">
            <h3 className="h5">Features</h3>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle text-success me-2"></i>Competitive interest rates</li>
              <li><i className="bi bi-check-circle text-success me-2"></i>Flexible repayment options</li>
              <li><i className="bi bi-check-circle text-success me-2"></i>Quick approval process</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="h5">Requirements</h3>
            <ul className="list-unstyled">
              <li><i className="bi bi-file-text me-2"></i>Proof of income</li>
              <li><i className="bi bi-file-text me-2"></i>Property documents</li>
              <li><i className="bi bi-file-text me-2"></i>Credit history</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/home-loan-apply")}
          >
            Apply for Home Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
