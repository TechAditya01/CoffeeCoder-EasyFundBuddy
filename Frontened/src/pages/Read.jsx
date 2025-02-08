const Read = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content p-4 bg-white shadow-lg">
        <h2 className="text-center">Kindly read the document till the end carefully</h2>
        <div className="terms-text">
          <h4>1. Consent for Disclosure of Information</h4>
          <p>
            I/We hereby furnish my consent to ICICI Bank to share and/or fetch any of my/our information
            (including my/our sensitive personal information, location etc.) or any other device information when ICICI Bank considers
            such disclosure/ fetching as necessary, with/ from:
          </p>
          <ul>
            <li>Agents of ICICI Bank in any jurisdiction.</li>
            <li>Auditors, credit rating agencies/credit bureaus, statutory/regulatory authorities.</li>
            <li>Service providers, professional advisors, consultants, or such persons with whom ICICI Bank contracts.</li>
          </ul>
          <h4>2. Consent for Camera/Microphone Access</h4>
          <p>
            I/We hereby authorize ICICI Bank to get a one-time access to my/our device's camera and microphone for the purposes of
            on-boarding and KYC verification which is required to be conducted to enable ICICI Bank to provide the credit facilities sought by me/us.
          </p>
          <h4>3. Consent to ICICI Bank’s Privacy Commitment</h4>
          <p>
            I/We confirm having read and understood ICICI Bank’s ‘Privacy Commitment’ available at
            <a href="" target="_blank" rel="noopener noreferrer"> ICICI Bank Privacy Policy</a>.
          </p>
          <h4>4. Authorization for Disclosure</h4>
          <p>
            I authorize ICICI Bank to disclose such information provided by me to its service providers to enable them to contact me for rendering
            assistance required to submit the application and complete on-boarding formalities.
          </p>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Read;
