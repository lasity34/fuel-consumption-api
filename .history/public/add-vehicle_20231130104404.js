
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
        messageElement.classList.add("error"); // Add only error class
        return; // Stop the function if fields are empty
    }

    try {
        const response = await axios.post('/api/vehicle', { description, regNumber });
        if (response.data.status === "success") {
            messageElement.textContent = "Vehicle Added Successfully";
            messageElement.classList.add("success"); // Add only success class
        } else {
            messageElement.textContent = response.data.message;
            messageElement.classList.add("error"); // Add only error class
        }
    } catch (error) {
        console.error("Error adding vehicle:", error);
        messageElement.textContent = "An error occurred while adding the vehicle.";
        messageElement.classList.add("error"); // Add only error class
    }

    // Set a timeout to clear the message
    setTimeout(() => {
        console.log("Clearing message"); // Debugging line
        messageElement.textContent = "";
        messageElement.className = "message";
    }, 3000);
    
});
