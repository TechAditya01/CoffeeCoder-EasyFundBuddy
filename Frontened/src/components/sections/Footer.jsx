


const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto py-5">
      <div className="container">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-3">
            <h4 className="h5 mb-3">Contact</h4>
            <div className="mb-2">
              <i className="bi bi-telephone me-2"></i>
              +91 9334170932
            </div>
            <div className="mb-2">
              <i className="bi bi-envelope me-2"></i>
              easyfundbuddygmail.com
            </div>
            <div className="mb-2">
              <i className="bi bi-geo-alt me-2"></i>
              Kohka, Bhilai, Chhattisgarh, India
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h4 className="h5 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3">
            <h4 className="h5 mb-3">Legal</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
            
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h4 className="h5 mb-3">Follow Us</h4>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="bi bi-facebook fs-4"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter fs-4"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin fs-4"></i></a>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-4 pt-4 text-center">
          <p className="mb-0">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;