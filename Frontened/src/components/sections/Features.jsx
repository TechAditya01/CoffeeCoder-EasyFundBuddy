import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BankingFeatures = () => {
  const [activeTab, setActiveTab] = useState('savings');

  const features = [
    {
      title: "Earn 10x the National Average",
      description: "Get 4.50% APY on your balance when you deposit 250+ per month.",
      icon: "💰"
    },
    {
      title: "Freedom from fees",
      description: "Keep more of your money with no account fees and free transfers.",
      icon: "✨"
    },
    {
      title: "0 minimum balance",
      description: "No minimum to open or minimum balances required.",
      icon: "🎯"
    },
    {
      title: "Instant Loan Applications",
      description: "Apply for loans through our user-friendly digital interface.",
      icon: "📱"
    },
    {
      title: "Real-time Tracking",
      description: "Monitor loan status and repayment progress in real-time.",
      icon: "📊"
    },
    {
      title: "Advanced Security",
      description: "Stay protected with encryption and multi-factor authentication.",
      icon: "🔒"
    },
    {
      title: "Flexible Repayment",
      description: "Choose from repayment options tailored to your financial needs.",
      icon: "⚡"
    },
    {
      title: "365/24 Support",
      description: "Access in-app customer support whenever you need assistance.",
      icon: "💬"
    }
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">Our Banking Features</h1>
      
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
                  </div>
                  <h5 className="card-title text-center mb-3">{feature.title}</h5>
                  <p className="card-text text-muted text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Bootstrap Modal for Feature Details */}
      <div className="modal fade" id="featureModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Feature Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>Additional feature details will appear here.</p>
            </div>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingFeatures;