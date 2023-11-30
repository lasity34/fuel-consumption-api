
// get values for description + reg number
// post into api
// display and implent regex/error/success
document.getElementById("addVehicleForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const messageElement = document.getElementById("message");
    messageElement.textContent = "Test message";
    messageElement.classList.add("success");

    setTimeout(() => {
        console.log("Clearing message"); // Debugging line
        messageElement.textContent = "";
        messageElement.className = "message";
    }, 3000);
});
