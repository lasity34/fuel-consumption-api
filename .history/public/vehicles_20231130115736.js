

// fetch all vehicles
// connect to div
// loop all vehicles
// display all vehicles 
axios.get('/api/vehicles')
    .then(response => {
        const vehicles = response.data.data;
        const list = document.getElementById("vehiclesList");
        vehicles.forEach(vehicle => {
            const item = document.createElement("div");
            item.className = 'vehicle-item'; // Add a class for styling
            item.innerHTML = `
                <h3>${vehicle.description}</h3>
                <p><strong>Reg Number:</strong> ${vehicle.reg_number}</p>
            `;
            list.appendChild(item);
        });
    })
    .catch(error => console.error("Error fetching vehicles:", error));

// Assuming each card has a data attribute 'data-vehicle-id'
document.querySelectorAll('.vehicle-card').forEach(item => {
    item.addEventListener('click', async (event) => {
        // Get vehicle ID from the card
        const vehicleId = item.getAttribute('data-vehicle-id');

        try {
            const response = await axios.get(`/api/vehicle?id=${vehicleId}`);
            const vehicleData = response.data;

            // Populate modal with vehicle data
            const vehicleDetails = document.getElementById("vehicleDetails");
            vehicleDetails.innerHTML = `
                <p>Description: ${vehicleData.description}</p>
                <p>Reg Number: ${vehicleData.reg_number}</p>
                <p>Total Distance Traveled: ${vehicleData.total_distance}</p>
                <p>Total Fuel Spent: ${vehicleData.total_amount}</p>
                <p>Fuel Consumption: ${vehicleData.fuel_consumption}</p>
            `;

            // Display the modal
            const modal = document.getElementById("vehicleModal");
            modal.style.display = "block";
        } catch (error) {
            console.error("Error fetching vehicle details:", error);
            // Handle error (show error message or log)
        }
    });
});

// Close modal event listener as previously described

