import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ApplyNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age: '',
    mobileNumber: '',
    dateOfBirth: '',
    aadhaarNumber: '',
    panCardNumber: '',
    accountHolder: '',
    accountNumber: '',
    ifscCode: '',
    branchAddress: '',
    photo: null,
    signature: null,
    bankPassbook: null,
    aadhaarCard: null,
    panCard: null,
  });

  const [errors, setErrors] = useState({
    fullName: '',
    gender: '',
    age: '',
    mobileNumber: '',
    dateOfBirth: '',
    aadhaarNumber: '',
    panCardNumber: '',
    accountHolder: '',
    accountNumber: '',
    ifscCode: '',
    branchAddress: '',
    photo: '',
    signature: '',
    bankPassbook: '',
    aadhaarCard: '',
    panCard: '',
  });

  const steps = [
    { number: 1, title: 'Necessary Information' },
    { number: 2, title: 'Personalize your loan' },
    { number: 3, title: 'Bank Details' },
    { number: 4, title: 'Documents Upload' },
    { number: 5, title: 'Review' },
    { number: 6, title: 'Submit' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      document: file,
    }));
  };

  const handleAadhaarVerify = () => {
    // Redirect user to DigiLocker for Aadhaar verification (using a placeholder URL for now)
    window.location.href = "https://www.digitallocker.gov.in"; // Redirect to DigiLocker
  };

  const validateFullName = () => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!formData.fullName.match(regex)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: 'Name must contain only letters and spaces.',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      fullName: '',
    }));
    return true;
  };

  const validateGender = () => {
    if (formData.gender !== 'Male' && formData.gender !== 'Female' && formData.gender !== 'Other') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: 'Please select a valid gender.',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      gender: '',
    }));
    return true;
  };

  const validateAge = () => {
    if (formData.age < 18 || formData.age.length !== 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: 'Age must be a valid two-digit number and at least 18.',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      age: '',
    }));
    return true;
  };

  const validateMobileNumber = () => {
    const regex = /^[0-9]{10}$/;
    if (!formData.mobileNumber.match(regex)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: 'Mobile number must be 10 digits.',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      mobileNumber: '',
    }));
    return true;
  };

  const validateDateOfBirth = () => {
    const today = new Date();
    const dob = new Date(formData.dateOfBirth);
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 18 || isNaN(dob.getTime())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dateOfBirth: 'Date of birth must be a valid date and you must be over 18.',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      dateOfBirth: '',
    }));
    return true;
  };
  const validateBankDetails = () => {
    if (!formData.accountHolder || !formData.accountNumber || !formData.ifscCode || !formData.branchAddress) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        accountHolder: 'All bank details must be filled.',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      accountHolder: '',
    }));
    return true;
  };
  const validateDocument = () => {
    const { photo, signature, bankPassbook, aadhaarCard, panCard } = formData;
    const fileSizeLimit = 5 * 1024 * 1024; // 5 MB limit for each file

    if (!photo || photo.size > fileSizeLimit) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        photo: 'Photo is required and must be under 5MB.',
      }));
      return false;
    }

    if (!signature || signature.size > fileSizeLimit) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        signature: 'Signature is required and must be under 5MB.',
      }));
      return false;
    }

    if (!bankPassbook || bankPassbook.size > fileSizeLimit) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        bankPassbook: 'Bank Passbook is required and must be under 5MB.',
      }));
      return false;
    }

    if (!aadhaarCard || aadhaarCard.size > fileSizeLimit) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        aadhaarCard: 'Aadhaar Card is required and must be under 5MB.',
      }));
      return false;
    }

    if (!panCard || panCard.size > fileSizeLimit) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        panCard: 'PAN Card is required and must be under 5MB.',
      }));
      return false;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      photo: '',
      signature: '',
      bankPassbook: '',
      aadhaarCard: '',
      panCard: '',
    }));
    return true;
  };
  const validateAadhaarNumber = () => {
    const regex = /^[0-9]{12}$/; // Aadhaar number should be 12 digits
    if (!formData.aadhaarNumber.match(regex)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        aadhaarNumber: 'Aadhaar number must be 12 digits.',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      aadhaarNumber: '',
    }));
    return true;
  };

  const validatePanCardNumber = () => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN card number format validation
    if (!formData.panCardNumber.match(regex)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        panCardNumber: 'PAN card number must follow the correct format (ABCDE1234F).',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      panCardNumber: '',
    }));
    return true;
  };

  const validateDocuments = () => {
    // Check if all required documents are uploaded (this example assumes file input elements)
    const photo = document.getElementById('photo').files.length;
    const signature = document.getElementById('signature').files.length;
    const bankPassbook = document.getElementById('bank-passbook').files.length;
    const aadhaarCard = document.getElementById('aadhaar-card').files.length;
    const panCard = document.getElementById('pan-card').files.length;
  
    // Return true if all documents are uploaded, else return false
    if (photo && signature && bankPassbook && aadhaarCard && panCard) {
      return true;
    } else {
      alert('Please upload all required documents.');
      return false;
    }
  };
  

  const handleNext = () => {
    const isValid =
      (currentStep === 1 && validateFullName() && validateGender() && validateAge() && validateMobileNumber() && validateDateOfBirth()) ||  // Step 1
      (currentStep === 2 && validateAadhaarNumber() ) || 
      (currentStep === 3 && validateBankDetails()) ||  
      (currentStep === 4 && validateDocuments()) || 
      (currentStep === 5);  
  
    if (isValid) {
      if (currentStep === 5) {
        setCurrentStep(6);  // Move to Step 6 when on Step 5 (Submit)
      } else {
        setCurrentStep(currentStep + 1);  // Proceed to the next step
      }
    }
  };
  

  const handleSubmit = () => {
    alert('Your registration is successful!');
  };

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Left Side - Progress Steps */}
      <div className="col-4 p-4 bg-white border-end">
        <div className="d-flex align-items-center mb-4 text-primary cursor-pointer">
          <ChevronLeft size={20} />
          <span className="ms-2"></span>
        </div>

        <div className="mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className="p-2 bg-primary bg-opacity-10 rounded">
              <svg className="icon-loan" width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="fs-4 fw-semibold mb-0">Get your</h1>
              <h2 className="fs-4 fw-semibold mb-1">loan approved</h2>
              <p className="text-secondary mb-0">in 5 simple steps</p>
            </div>
          </div>
        </div>

        <div className="position-relative">
          {steps.map((step, index) => (
            <div key={step.number} className="position-relative d-flex align-items-start mb-4">
              <div className="position-relative">
                <div
                  className={`step-circle d-flex align-items-center justify-content-center rounded-circle border border-2 
                  ${currentStep >= step.number ? 'bg-primary border-primary text-white' : 'border-secondary text-secondary'}`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`step-line position-absolute ${currentStep > step.number ? 'bg-primary' : 'bg-secondary'}`} />
                )}
              </div>
              <div className="ms-3">
                <p className={`fw-medium mb-0 ${currentStep >= step.number ? 'text-dark' : 'text-secondary'}`}>{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form Content */}
      <div className="col-8 p-4">
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          {/* Conditional Rendering for each step */}
          {currentStep === 1 && (
            <>
              <h2 className="fs-4 fw-semibold mb-4">Necessary Information</h2>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={validateFullName}
                />
                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                  className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  onBlur={validateGender}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  onBlur={validateAge}
                />
                {errors.age && <div className="invalid-feedback">{errors.age}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="text"
                  className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  onBlur={validateMobileNumber}
                />
                {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  onBlur={validateDateOfBirth}
                />
                {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
              </div>
            </>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <>
              <h2 className="fs-4 fw-semibold mb-4">Personalize your loan</h2>
              <div className="mb-3">
                <label className="form-label">Aadhaar Number</label>
                <input
                  type="text"
                  className={`form-control ${errors.aadhaarNumber ? 'is-invalid' : ''}`}
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  onBlur={validateAadhaarNumber}
                />
                {errors.aadhaarNumber && <div className="invalid-feedback">{errors.aadhaarNumber}</div>}
                <button type="button" className="btn btn-outline-primary mt-2" onClick={handleAadhaarVerify}>
                  Verify
                </button>
              </div>
              <div className="mb-3">
                <label className="form-label">PAN Card Number</label>
                <input
                  type="text"
                  className={`form-control ${errors.panCardNumber ? 'is-invalid' : ''}`}
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleChange}
                  onBlur={validatePanCardNumber}
                />
                {errors.panCardNumber && <div className="invalid-feedback">{errors.panCardNumber}</div>}
              </div>
            </>
          )}
{/* Step 3 - Bank Details */}
{currentStep === 3 && (
  <>
    <h2 className="fs-4 fw-semibold mb-4">Bank Details</h2>
    <div className="mb-3">
      <label className="form-label">Account Holder</label>
      <input
        type="text"
        className={`form-control ${errors.accountHolder ? 'is-invalid' : ''}`}
        name="accountHolder"
        value={formData.accountHolder}
        onChange={handleChange}
        onBlur={validateBankDetails}
      />
      {errors.accountHolder && <div className="invalid-feedback">{errors.accountHolder}</div>}
    </div>
    <div className="mb-3">
      <label className="form-label">Account Number</label>
      <input
        type="text"
        className={`form-control ${errors.accountNumber ? 'is-invalid' : ''}`}
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleChange}
        onBlur={validateBankDetails}
      />
      {errors.accountNumber && <div className="invalid-feedback">{errors.accountNumber}</div>}
    </div>
    <div className="mb-3">
      <label className="form-label">IFSC Code</label>
      <input
        type="text"
        className={`form-control ${errors.ifscCode ? 'is-invalid' : ''}`}
        name="ifscCode"
        value={formData.ifscCode}
        onChange={handleChange}
        onBlur={validateBankDetails}
      />
      {errors.ifscCode && <div className="invalid-feedback">{errors.ifscCode}</div>}
    </div>
    <div className="mb-3">
      <label className="form-label">Branch Address</label>
      <input
        type="text"
        className={`form-control ${errors.branchAddress ? 'is-invalid' : ''}`}
        name="branchAddress"
        value={formData.branchAddress}
        onChange={handleChange}
        onBlur={validateBankDetails}
      />
      {errors.branchAddress && <div className="invalid-feedback">{errors.branchAddress}</div>}
    </div>
  </>
)}

{/* Step 4 - Document Upload */}
{currentStep === 4 && (
  <>
    <h2 className="fs-4 fw-semibold mb-4">Documents Upload</h2>
    <div className="mb-3">
      <label className="form-label">Photo</label>
      <input
        type="file"
        className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
        id="photo"
        name="photo"
        onChange={handleFileChange}
      />
      {errors.photo && <div className="invalid-feedback">{errors.photo}</div>}
    </div>
    <div className="mb-3">
      <label className="form-label">Signature</label>
      <input
        type="file"
        className={`form-control ${errors.signature ? 'is-invalid' : ''}`}
        id="signature"
        name="signature"
        onChange={handleFileChange}
      />
      {errors.signature && <div className="invalid-feedback">{errors.signature}</div>}
    </div>
    <div className="mb-3">
      <label className="form-label">Bank Passbook</label>
      <input
        type="file"
        className={`form-control ${errors.bankPassbook ? 'is-invalid' : ''}`}
        id="bank-passbook"
        name="bankPassbook"
        onChange={handleFileChange}
      />
      {errors.bankPassbook && <div className="invalid-feedback">{errors.bankPassbook}</div>}
    </div>
    <div className="mb-3">
      <label className="form-label">Aadhaar Card</label>
      <input
        type="file"
        className={`form-control ${errors.aadhaarCard ? 'is-invalid' : ''}`}
        id="aadhaar-card"
        name="aadhaarCard"
        onChange={handleFileChange}
      />
      {errors.aadhaarCard && <div className="invalid-feedback">{errors.aadhaarCard}</div>}
    </div>
    <div className="mb-3">
      <label className="form-label">PAN Card</label>
      <input
        type="file"
        className={`form-control ${errors.panCard ? 'is-invalid' : ''}`}
        id="pan-card"
        name="panCard"
        onChange={handleFileChange}
      />
      {errors.panCard && <div className="invalid-feedback">{errors.panCard}</div>}
    </div>
  </>
)}

{/* Step 5 - Review */}
{currentStep === 5 && (
  <>
    <h2 className="fs-4 fw-semibold mb-4">Review</h2>
    
    <p><strong>Full Name:</strong> {formData.fullName}</p>
    <p><strong>Gender:</strong> {formData.gender}</p>
    <p><strong>Age:</strong> {formData.age}</p>
    <p><strong>Mobile Number:</strong> {formData.mobileNumber}</p>
    <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
    <p><strong>Aadhaar Number:</strong> {formData.aadhaarNumber}</p>
    <p><strong>PAN Card Number:</strong> {formData.panCardNumber}</p>
    <p><strong>Bank Account Holder:</strong> {formData.accountHolder}</p>
    <p><strong>Bank Account Number:</strong> {formData.accountNumber}</p>
    <p><strong>IFSC Code:</strong> {formData.ifscCode}</p>
    <p><strong>Branch Address:</strong> {formData.branchAddress}</p>
  
    <button className="btn btn-primary" onClick={handleSubmit}>Submit Application</button>
  </>
)}

{/* Next Button */}
<div className="d-flex justify-content-between mt-4">
  <button
    className="btn btn-secondary"
    onClick={() => setCurrentStep(currentStep - 1)}
    disabled={currentStep === 1}
  >
    Back
  </button>
  <button
    className="btn btn-primary"
    onClick={handleNext}
  >
    {currentStep === 5 ? 'Submit' : 'Next'}
  </button>
</div>
</div>
</div>
</div>
);
};

export default ApplyNow;
