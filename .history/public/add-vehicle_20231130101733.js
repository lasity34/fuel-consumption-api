import axios from 'axios';

document.getElementById("addVehicleForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value;
    const regNumber = document.getElementById("regNumber").value;

    try {
        const response = await axios.post('/api/vehicle', { description, regNumber });
        alert("Vehicle Added: " + JSON.stringify(response.data));
    } catch (error) {
        console.error("Error adding vehicle:", error);
    }
});
