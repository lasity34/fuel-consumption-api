

// get values for description + reg number
// post into api
// display and implent regex/error/success

document.getElementById("addVehicleForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value.trim();
    const regNumber = document.getElementById("regNumber").value.trim();
    const messageElement = document.getElementById("message");

    // Check if the fields are not empty
    if (!description || !regNumber) {
        messageElement.textContent = "Both description and registration number are required.";
        messageElement.className = "message error";
        return; // Stop the function if fields are empty
    }

    try {
        const response = await axios.post('/api/vehicle', { description, regNumber });
        if (response.data.status === "success") {
            messageElement.textContent = "Vehicle Added Successfully";
            messageElement.className = "message success";
        } else {
            messageElement.textContent = response.data.message;
            messageElement.className = "message error";
        }
    } catch (error) {
        console.error("Error adding vehicle:", error);
        messageElement.textContent = "An error occurred while adding the vehicle.";
        messageElement.className = "message error";
    }

    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.className = "message";
    }, 3000); // Clear message after 3 seconds
});