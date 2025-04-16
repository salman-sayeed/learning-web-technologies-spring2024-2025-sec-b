function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('small');
    errorElements.forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });
  }
  
  function validateForm() {
    clearErrors();
  
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]+$/;
    let isValid = true;
  
    if (!firstName || !nameRegex.test(firstName)) {
      showError('errorFirstName', 'Please enter a valid first name.');
      isValid = false;
    }
  
    if (!lastName || !nameRegex.test(lastName)) {
      showError('errorLastName', 'Please enter a valid last name.');
      isValid = false;
    }
  
    if (!email || !emailRegex.test(email)) {
      showError('errorEmail', 'Please enter a valid email address.');
      isValid = false;
    }
  
    if (!/^\d{11}$/.test(phone)) {
      showError('errorPhone', 'Phone number must be 11 digits.');
      isValid = false;
    }
  
    if (!message) {
      showError('errorMessage', 'Please enter your message.');
      isValid = false;
    }
  
    if (captcha !== '7') {
      showError('errorCaptcha', 'Incorrect answer. Please try again.');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
    }
  
    return isValid;
  }
  