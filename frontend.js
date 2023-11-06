$(document).ready(function () {
    $("#login-form").on("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        const username = $("#login-username").val();
        const password = $("#login-password").val();

        // Send a POST request to your Node.js backend for login
        $.post("/login", { username, password }, function (response) {
            if (response.success) {
                alert("Login successful!");
                window.location.href = "/cms.html";
            } else {
                alert("Login failed.Please check your credentials!"); 
            }
        });
    });

    $("#signup-form").on("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        const username = $("#signup-username").val();
        const password = $("#signup-password").val();

        // Send a POST request to your Node.js backend for signup
        $.post("/signup", { username, password }, function (response) {
            if (response.success) {
                alert("Signup successful!");
                window.location.href = "/cms.html";
            } else {
                alert("Signup failed. Please try again.");
            }
        });
    });
});
