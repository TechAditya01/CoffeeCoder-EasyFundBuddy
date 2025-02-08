// src/components/loan/LoanOptions.jsx
const LoanOptions = ({ selectedOption, onOptionSelect }) => {
  return (
    <div className="list-group">
      <button
        className={`list-group-item list-group-item-action ${
          selectedOption === 'home' ? 'active' : ''
        }`}
        onClick={() => onOptionSelect('home')}
      >
        <i className="bi bi-house-door me-2"></i>
        Home Loan
      </button>
      <button
        className={`list-group-item list-group-item-action ${
          selectedOption === 'car' ? 'active' : ''
        }`}
        onClick={() => onOptionSelect('car')}
      >
        <i className="bi bi-car-front me-2"></i>
        Car Loan
      </button>
      <button
        className={`list-group-item list-group-item-action ${
          selectedOption === 'education' ? 'active' : ''
        }`}
        onClick={() => onOptionSelect('education')}
      >
        <i className="bi bi-mortarboard me-2"></i>
        Education Loan
      </button>
    </div>
  );
};

export default LoanOptions;
