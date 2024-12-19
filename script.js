document.getElementById("studioBookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sessionType = document.getElementById("session-type").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Validate fields
    if (name && email && sessionType && date && time) {
        // Confirmation message
        const confirmationMessage = `Thank you, ${name}! Your ${sessionType} session is booked for ${date} at ${time}.`;
        document.getElementById("confirmationMessage").textContent = confirmationMessage;

        // Clear form
        document.getElementById("studioBookingForm").reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
});


console.log("hello")