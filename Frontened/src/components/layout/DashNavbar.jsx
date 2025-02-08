import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-between px-4">
      <h4>Loan Application</h4>
      <div className="d-flex align-items-center gap-3">
        <img src="/profile.jpg" alt="Profile" className="rounded-circle" width="40" height="40" />
        <button className="btn btn-danger" onClick={() => navigate('/home')}>Logout</button>
      </div>
    </nav>
  );
};