// Ensure DOM is fully loaded before executing our scripts
document.addEventListener("DOMContentLoaded", function() {
  
    // -------------------------------
    // Interactive Element using Event Listener
    // -------------------------------
    const changeTextBtn = document.getElementById('changeTextBtn');
    const interactiveText = document.getElementById('interactiveText');
    
    // When the button is clicked, update the text content
    changeTextBtn.addEventListener('click', function() {
      interactiveText.textContent = "The text has been updated! Enjoy the interactive experience.";
    });
    
    // -------------------------------
    // Form Validation with Event Listeners
    // -------------------------------
    const signupForm = document.getElementById('signupForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formMessage = document.getElementById('formMessage');
    
    signupForm.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Clear previous error messages
      nameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      formMessage.textContent = "";
      
      // Track if any error is found
      let isValid = true;
      
      // Basic validation for full name
      if (fullNameInput.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        isValid = false;
      }
      
      // Email validation: check if input is empty and if it has a basic email format
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }
      
      // Validate password (e.g., at least 6 characters)
      if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
      } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
      }
      
      // If valid, display success message
      if (isValid) {
        formMessage.textContent = "Thanks for signing up!";
        // Optionally, clear the form inputs
        signupForm.reset();
      }
    });
  });
  