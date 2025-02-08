/* Dashboard Component */
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container mt-4 d-flex">
        {/* Features Section */}
        <div className="w-50 p-3 border">
          <h5>Features</h5>
          <ul>
            <li>Loan Status</li>
            <li>EMI Calculator</li>
            <li>Support</li>
          </ul>
          <button className="btn btn-info" onClick={() => navigate('/tracking')}>Tracking</button>
        </div>
        
        {/* Last History Section */}
        <div className="w-50 p-3 border">
          <h5>Last Application History</h5>
          <button className="btn btn-secondary" onClick={() => alert("Showing last application history")}>View History</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};