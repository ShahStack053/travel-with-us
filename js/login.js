// login.js file

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Replace with your actual login API endpoint
    const loginApiUrl = "http://localhost:80/api/auth/login";
   
    fetch(loginApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        console.log("response===.", response);
        return response.json();
      })
      .then((data) => {
        console.log("data====>", data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", data.role);
          localStorage.setItem("isLoggedIn", "true");
          if (data.role === "admin") {
            window.location.href = "/pages/dashboard.html";
          } else {
            window.location.href = "/pages/home.html";
          }
        }
        if (data.msg) {
          alert(data.msg);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("Login failed: " + error.message);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("SignUpForm");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    if (password !== confirmPassword) {
      alert("Password and confirm password must be same.");
      return; // Exit the function and do not submit the form
    }
    console.log(
      "signup form=====>",
      username,
      email,
      password,
      confirmPassword
    );
    // Set to your actual signup API endpoint
    const signUpApiUrl = "http://localhost:80/api/auth/signup";

    fetch(signUpApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword, // Ensure your API handles/needs confirmPassword
      }),
    })
      .then((response) => {
        console.log("response===>", response);
        if (response.status === 409) {
          alert("email already exist");
        } else if (response.status === 201) {
          window.location.href = "login.html";
        } else {
          alert("error in registering");
        }
      }) // Convert response to JSON
      .then((data) => {
        // window.location.href = "login.html";
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error during signup:=====>", error);
        alert("Signup failed: Please try again later.");
      });
  });
});
