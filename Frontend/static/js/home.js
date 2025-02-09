(() => {
  const loanAmountInput = document.getElementById("loanAmount");
  const loanTenureInput = document.getElementById("loanTenure");
  const loanError = document.getElementById("loanError");
  const tenureError = document.getElementById("tenureError");
  const applyLoanBtn = document.getElementById("applyLoan");
  const agreeConsent = document.getElementById("agreeConsent");
  const agreePrivacy = document.getElementById("agreePrivacy");
  const errorMsg = document.getElementById("error");
  const reviewSection = document.getElementById("review");

  const validateLoanAmount = (amount) => {
      if (amount < 25000 || amount > 5000000 || amount % 1000 !== 0) {
          loanError.textContent = "Please enter a valid amount between 25,000 & 50,00,000 (Multiples of 1000)";
          return false;
      }
      loanError.textContent = "";
      return true;
  };

  const validateLoanTenure = (tenure) => {
      if (tenure < 12 || tenure > 72) {
          tenureError.textContent = "Please enter a tenure between 12 and 72 months";
          return false;
      }
      tenureError.textContent = "";
      return true;
  };

  const updateReview = () => {
      const loanAmount = Number(loanAmountInput.value);
      const loanTenure = Number(loanTenureInput.value);

      if (validateLoanAmount(loanAmount) && validateLoanTenure(loanTenure)) {
          reviewSection.innerHTML = `
              <h4>Review Your Loan Details</h4>
              <p><strong>Loan Amount:</strong> ₹${loanAmount.toLocaleString()}</p>
              <p><strong>Loan Tenure:</strong> ${loanTenure} months</p>
          `;
      } else {
          reviewSection.innerHTML = "";
      }
  };

  loanAmountInput.addEventListener("input", () => {
      validateLoanAmount(Number(loanAmountInput.value));
      updateReview();
      checkFormValidity();
  });

  loanTenureInput.addEventListener("input", () => {
      validateLoanTenure(Number(loanTenureInput.value));
      updateReview();
      checkFormValidity();
  });

  agreeConsent.addEventListener("change", checkFormValidity);
  agreePrivacy.addEventListener("change", checkFormValidity);

  const checkFormValidity = () => {
      if (
          validateLoanAmount(Number(loanAmountInput.value)) &&
          validateLoanTenure(Number(loanTenureInput.value)) &&
          agreeConsent.checked &&
          agreePrivacy.checked
      ) {
          applyLoanBtn.removeAttribute("disabled");
          errorMsg.textContent = "";
      } else {
          applyLoanBtn.setAttribute("disabled", "true");
      }
  };

  applyLoanBtn.addEventListener("click", () => {
      if (!agreeConsent.checked || !agreePrivacy.checked) {
          errorMsg.textContent = "You must agree to both consents to apply.";
          return;
      }

      if (!loanAmountInput.value || !loanTenureInput.value || loanError.textContent || tenureError.textContent) {
          errorMsg.textContent = "Please fill in valid loan details before applying.";
          return;
      }

      alert("Loan application submitted successfully!");
  });
})();

document.getElementById("applyLoan").addEventListener("click", function() {
  window.location.href = "necessary.html";
});