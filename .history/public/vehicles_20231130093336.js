async function fetchVehicles() {
    try {
        const response = await fetch('/api/vehicles');
        const data = await response.json();
        if (data.status === "success") {
            const vehicles = data.data;
            const list = document.getElementById("vehiclesList");
            vehicles.forEach(vehicle => {
                const item = document.createElement("div");
                item.innerHTML = `<strong>${vehicle.description}</strong> - ${vehicle.regNumber}`;
                list.appendChild(item);
            });
        }
    } catch (error) {
        console.error("Error fetching vehicles:", error);
    }
}

fetchVehicles();
