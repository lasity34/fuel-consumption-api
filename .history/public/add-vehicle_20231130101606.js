import axios from "axios";

document.getElementById("addVehicleForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value;
    const regNumber = document.getElementById("regNumber").value;

    try {
        const response = await fetch('/api/vehicle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description, regNumber }),
        });
        const result = await response.json();
        alert("Vehicle Added: " + JSON.stringify(result));
    } catch (error) {
        console.error("Error adding vehicle:", error);
    }
});
