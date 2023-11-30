
// fetch all vehicles
// connect to div
// loop all vehicles
// display all vehicles 
// Fetch all vehicles and display them
axios.get('/api/vehicles')
    .then(response => {
        const vehicles = response.data.data; // Adjust based on your API's response structure
        const list = document.getElementById("vehiclesList");

        vehicles.forEach(vehicle => {
            const card = document.createElement("div");
            card.className = 'vehicle-card'; // Ensure this class is styled in CSS
            card.setAttribute('data-vehicle-id', vehicle.id); // Assuming each vehicle has an id

            card.innerHTML = `
                <h3>${vehicle.description}</h3>
                <p><strong>Reg Number:</strong> ${vehicle.reg_number}</p>
            `;

            list.appendChild(card);
        });

        // Attach click event listeners to each card
        document.querySelectorAll('.vehicle-card').forEach(card => {
            card.addEventListener('click', async () => {
                const vehicleId = card.getAttribute('data-vehicle-id');

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
    })
    .catch(error => console.error("Error fetching vehicles:", error));

// Close modal logic
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    document.getElementById('vehicleModal').style.display = 'none';
});


