/* Tracking Page */
const Tracking = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4 text-center">
        <h4>Track Your Application</h4>
        <p>Your loan application is being processed...</p>
      </div>
      <Footer />
    </div>
  );
};

/* Footer Component */
const Footer = () => {
  return (
    <footer className="text-center py-3 mt-4 bg-light">
      <p>&copy; 2025 Loan Application. All Rights Reserved.</p>
    </footer>
  );
};