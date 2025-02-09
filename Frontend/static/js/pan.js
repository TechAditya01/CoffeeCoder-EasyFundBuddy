document.getElementById("verifyBtn").addEventListener("click", function() {
  let panInput = document.getElementById("panNumber").value.toUpperCase();
  let errorField = document.getElementById("panError");
  let bankSection = document.getElementById("bankSection");

  let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  if (!panRegex.test(panInput)) {
    errorField.innerText = "Invalid PAN format! Example: ABCDE1234F";
    bankSection.classList.add("hidden");
  } else if (panInput === "ABCDE1234F") {
    errorField.innerText = "";
    alert("PAN Matched with Aadhaar!");
    bankSection.classList.remove("hidden");
  } else {
    errorField.innerText = "PAN does not match with Aadhaar!";
    bankSection.classList.add("hidden");
  }
});

document.getElementById("bankSelect").addEventListener("change", function() {
  let bankDetails = {
    "SBI": { accountNumber: "12345678901", ifsc: "SBIN0001234", branch: "Mumbai" },
    "HDFC": { accountNumber: "98765432101", ifsc: "HDFC0005678", branch: "Delhi" },
    "ICICI": { accountNumber: "56789012345", ifsc: "ICIC0007890", branch: "Bangalore" }
  };

  let selectedBank = this.value;
  let accountHolder = document.getElementById("accountHolder");
  let accountNumber = document.getElementById("accountNumber");
  let ifscCode = document.getElementById("ifscCode");
  let branchName = document.getElementById("branchName");

  if (selectedBank && bankDetails[selectedBank]) {
    accountNumber.innerText = bankDetails[selectedBank].accountNumber;
    ifscCode.innerText = bankDetails[selectedBank].ifsc;
    branchName.innerText = bankDetails[selectedBank].branch;
    document.querySelector(".bank-details").classList.remove("hidden");
  } else {
    document.querySelector(".bank-details").classList.add("hidden");
  }
});

document.getElementById("submitBtn").addEventListener("click", function() {
  document.getElementById("submissionMessage").classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 3000);
});
