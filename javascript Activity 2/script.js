function calculateVolume() {

    // Get radius value
    const radiusInput = document.getElementById("radius").value;

    // Convert to number
    const radius = Number(radiusInput);

    // Validate input
    if (radius <= 0 || isNaN(radius)) {
        document.getElementById("volume").value = "Invalid input";
        return;
    }

    // Calculate volume: (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display result in the volume input field
    document.getElementById("volume").value = volume.toFixed(2);
}