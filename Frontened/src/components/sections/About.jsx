import React from 'react';
import { Shield, Building2, MessagesSquare } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Security",
      description: "Keeping your financial information private and secure is our top priority."
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Secure Transactions",
      description: "All transactions are end-to-end encrypted for maximum security."
    },
    {
      icon: <MessagesSquare className="w-12 h-12 text-primary" />,
      title: "365/24 Support",
      description: "Have a question? Our dedicated team is here to help you anytime via chat, phone, or email."
    }
  ];

  const team = [
    {
      name: "Aditya",
      role: "Founder & CEO",
      bio: "Visionary leader  in EasyFundBuddy's mission to revolutionize banking"
    },
    {
      name: "Animesh",
      role: "CTO",
      bio: "Tech innovator specializing in scalable solutions"
    },
    {
      name: "Manisha & Manish",
      role: "Lead Developer",
      bio: "Full-stack expert with a passion for clean code"
    }
  ];

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Our Story</h1>
          <p className="lead">Building the future of technology, one innovation at a time</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mb-5">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="h4 mb-3">{feature.title}</h3>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 bg-light">
              <div className="card-body p-4">
                <h3 className="h3 text-primary mb-4">Our Mission</h3>
                <p className="mb-0">To create impactful solutions that empower people and businesses through technology and innovation, setting new standards in digital transformation.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 bg-light">
              <div className="card-body p-4">
                <h3 className="h3 text-primary mb-4">Our Vision</h3>
                <p className="mb-0">To be a global leader in technological advancements, making lives easier and businesses more efficient while fostering sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-5">Meet Our Leadership</h2>
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  
                  <h4 className="mb-2">{member.name}</h4>
                  <p className="text-primary fw-bold mb-2">{member.role}</p>
                  <p className="text-muted mb-0">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;