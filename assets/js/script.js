'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

function sendMessage() {
  // Get the message from the input field
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formData = {
    name: name,
    email: email,
    message: message
  }

  // Example: Sending the message to a hypothetical backend endpoint
  // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
  const backendEndpoint = 'https://personal-porfolio-backend-theta.vercel.app/send';

  // Assuming you're using fetch for the request
  fetch(backendEndpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      alert(data.message);
      // Handle success, e.g., display a success message to the user
  })
  .catch(error => {
      console.error('Error sending message:', error);
      // Handle error, e.g., display an error message to the user
  });
}
