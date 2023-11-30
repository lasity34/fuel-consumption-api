

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
            item.innerHTML = `<strong>${vehicle.description}</strong> - ${vehicle.regNumber}`;
            list.appendChild(item);
        });
    })
    .catch(error => console.error("Error fetching vehicles:", error));


fetchVehicles();
