

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
                <p><strong>Total Distance Traveled:</strong> ${vehicle.total_distance || 'N/A'} km</p>
                <p><strong>Total Fuel Spent:</strong> ${vehicle.total_amount || 'N/A'} currency units</p>
                <p><strong>Fuel Consumption:</strong> ${vehicle.fuel_consumption || 'N/A'} liters/km</p>
            `;
            list.appendChild(item);
        });
    })
    .catch(error => console.error("Error fetching vehicles:", error));


