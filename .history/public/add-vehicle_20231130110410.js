
// get values for description + reg number
// post into api
// display and implent regex/error/success
document.getElementById("addVehicleForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value.trim();
    const regNumber = document.getElementById("regNumber").value.trim();
    const messageElement = document.getElementById("message");

    // Function to capitalize each word in a string
    const capitalizeWords = (str) => {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    };

    // Capitalize description
    const capitalizedDescription = capitalizeWords(description);

    // Function to set and clear message
    const showMessage = (text, className) => {
        messageElement.textContent = text;
        messageElement.className = "message " + className;
        setTimeout(() => {
            messageElement.textContent = "";
            messageElement.className = "message";
        }, 3000);
    };

    // Check if the fields are not empty
    if (!capitalizedDescription || !regNumber) {
        showMessage("Both description and registration number are required.", "error");
        return;
    }

    try {
        const response = await axios.post('/api/vehicle', { description: capitalizedDescription, regNumber });
        if (response.data.status === "success") {
            showMessage("Vehicle Added Successfully", "success");
        } else {
            showMessage(response.data.message, "error");
        }
    } catch (error) {
        console.error("Error adding vehicle:", error);
        showMessage("An error occurred while adding the vehicle.", "error");
    }
});
