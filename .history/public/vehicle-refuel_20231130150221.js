// Fetch and populate the dropdown with vehicles
axios.get('/api/vehicles')
    .then(response => {
        const vehicles = response.data.data;
        const vehicleSelect = document.getElementById("vehicleId");

        vehicles.forEach(vehicle => {
            const option = document.createElement("option");
            option.value = vehicle.id;
            option.textContent = `${vehicle.description} (ID: ${vehicle.id})`;
            vehicleSelect.appendChild(option);
        });
    })
    .catch(error => console.error("Error fetching vehicles:", error));

// Handle form submission
document.getElementById("refuelForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const vehicleId = Number(document.getElementById("vehicleId").value);
    const liters = Number(document.getElementById("liters").value);
    const amount = Number(document.getElementById("amount").value);
    const distance = Number(document.getElementById("distance").value);
    const filledUp = document.getElementById("filledUp").checked;
    const messageElement = document.getElementById("message");


    console.log(filledUp)
    try {
        const response = await axios.post('/api/refuel', {
            vehicleId,
            liters,
            amount,
            distance,
            filled_up: filledUp
        });

        if (response.data.status === "success") {
            messageElement.textContent = "Refuel Recorded Successfully";
            messageElement.className = "message success";
        } else {
            messageElement.textContent = response.data.message || "Error recording refuel";
            messageElement.className = "message error";
        }
    } catch (error) {
        console.error("Error recording refuel:", error);
        messageElement.textContent = "An error occurred while recording the refuel.";
        messageElement.className = "message error";
    }

    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.className = "message";
    }, 3000);
});
