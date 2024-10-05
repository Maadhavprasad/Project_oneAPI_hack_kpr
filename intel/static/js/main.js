// Event listeners for buttons
document.getElementById("ug-button").addEventListener("click", function () {
    alert("You selected Student");
    // Redirect to student page after alert
    window.location.href = "student.html"; // Ensure this URL is correct
});

document.getElementById("pg-button").addEventListener("click", function () {
    alert("You selected Professional");
    // Redirect to routine page after alert
    window.location.href = "routine.html"; // Ensure this URL is correct
});
