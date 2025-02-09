document.getElementById("verifyBtn").addEventListener("click", function() {
  let aadhaar = document.getElementById("aadhaarInput").value;

  if (aadhaar.length === 12) {
    document.getElementById("userDetails").style.display = "block";
    document.getElementById("name").innerText = "Rahul Sharma";
    document.getElementById("dob").innerText = "15-08-1995";
    document.getElementById("gender").innerText = "Male";
    document.getElementById("age").innerText = "28";
    document.getElementById("mobile").innerText = "9876543210";

    document.getElementById("step1").classList.add("active");
    document.getElementById("step2").classList.add("active");
    document.getElementById("step3").classList.add("active");
  } else {
    alert("Enter a valid 12-digit Aadhaar number.");
  }
});

document.getElementById("nextBtn").addEventListener("click", function() {
  window.location.href = "nextpage.html";
});
