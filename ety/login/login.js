document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  

  if (username === "kurt" && password === "1234") {
    alert("Login successful!");
    window.location.href ="/home/index.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
