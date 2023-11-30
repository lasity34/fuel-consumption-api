
// get values for description + reg number
// post into api
// display and implent regex/error/success
document.getElementById("addVehicleForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value.trim();
    const regNumber = document.getElementById("regNumber").value.trim();
    const messageElement = document.getElementById("message");

    // Clear any previous message styles
    messageElement.className = "message";

    // Check if the fields are not empty
    if (!description || !regNumber) {
        messageElement.textContent = "Both description and registration number are required.";
        messageElement.classList.add("error");
        return; // Stop the function if fields are empty
    }

    // Simplified message for testing
    messageElement.textContent = "Test message";
    messageElement.classList.add("success");

    setTimeout(() => {
        console.log("Clearing message");
        messageElement.textContent = "";
        messageElement.className = "message";
    }, 3000);
});
