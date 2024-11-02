document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector(".registration-form form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Basic form validation
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const course = document.getElementById("course").value;
        const payment = document.getElementById("payment").value;

        if (name === "" || email === "" || password === "" || course === "" || payment === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate successful registration
        alert(`Registration successful!\nName: ${name}\nEmail: ${email}\nCourse: ${course}\nPayment Method: ${payment}`);

        // Optionally, reset the form
        registrationForm.reset();
    });
});
