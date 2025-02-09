document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animation for Form
  gsap.from(".signup-container", { duration: 1, opacity: 0, y: -50 });

  // Form Validation
  document.getElementById("signup-form").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission for now

      let fullName = document.getElementById("full-name").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();

      if (fullName === "" || email === "" || password === "") {
          alert("All fields are required!");
          return;
      }

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return;
      }

      alert("Signup successful!");
  });

  // Email Validation Function
  function validateEmail(email) {
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
