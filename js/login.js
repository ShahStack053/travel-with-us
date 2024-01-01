// login.js file

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Replace with your actual login API endpoint
    const loginApiUrl = "";
    if (email === "admin@gmail.com") {
      // Redirect to dashboard.html for admin
      window.location.href = "/pages/dashboard.html";
    } else {
      // Redirect to home.html for other users
      window.location.href = "/pages/home.html";
    }
    // fetch(loginApiUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ email: email, password: password })
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     if (data.success) {
    //         // Redirect to index.html on successful login
    //         window.location.href = 'index.html';
    //     } else {
    //         // Handle login failure
    //         alert('Login failed: ' + data.message);
    //     }
    // })
    // .catch(error => {
    //     console.error('Error during login:', error);
    //     alert('Login failed: ' + error.message);
    // });
  });
});
