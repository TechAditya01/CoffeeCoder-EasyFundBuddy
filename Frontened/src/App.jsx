// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import HomeLoanApply from "./pages/HomeLoanApply";
import HomeLoan from "./components/Loan/HomeLoan";
import Hero from './components/sections/Hero';
import Chat from "./components/chat/ChatBot"; // Import Chat page
import Read from "./pages/Read";
import ApplyNow from "./pages/ApplyNow";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

// Function to conditionally render Navbar based on route
function MainLayout() {
  const location = useLocation(); // Get current route

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ["/apply", ];
  

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Show Navbar only if the current route is NOT in hideNavbarRoutes */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/" element={<HomeLoan />} />
        <Route path="/home-loan-apply" element={<HomeLoanApply />} />
        <Route path="/chat" element={<Chat />} /> {/* Add Chat route */}
        <Route path="/read" element={<Read />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      

    </div>
  );
}

export default App;
