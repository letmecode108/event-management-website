// JavaScript for handling form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const regNumber = document.getElementById('regNumber').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const payment = document.getElementById('payment').value;
  
    // Log data to the console (you can connect it to a backend service)
    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Registration Number:", regNumber);
    console.log("Gender:", gender);
    console.log("Phone:", phone);
    console.log("Payment Method:", payment);
  
    alert("Registration successful!");
  });
  