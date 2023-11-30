document.getElementById("addVehicleForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value;
    const regNumber = document.getElementById("regNumber").value;
    const messageElement = document.getElementById("message");

    try {
        const response = await axios.post('/api/vehicle', { description, regNumber });
        if (response.data.status === "success") {
            messageElement.textContent = "Vehicle Added Successfully";
            messageElement.className = "message success"; // Add success class
        } else {
            messageElement.textContent = response.data.message;
            messageElement.className = "message error"; // Add error class
        }
    } catch (error) {
        console.error("Error adding vehicle:", error);
        messageElement.textContent = "An error occurred while adding the vehicle.";
        messageElement.className = "message error"; // Add error class
    }

    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.className = "message";
    }, 3000); // Clear message after 3 seconds
});
