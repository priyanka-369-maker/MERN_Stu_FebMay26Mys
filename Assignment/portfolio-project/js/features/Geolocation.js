function initGeolocationFeature() {
    const btn = document.getElementById("get-location");
    const output = document.getElementById("location-message");

    if (!btn || !output) return;

    btn.addEventListener("click", function () {

        if (!navigator.geolocation) {
            output.textContent = "Geolocation is not supported by your browser ❌";
            return;
        }

        output.textContent = "Detecting location... ⏳";

        navigator.geolocation.getCurrentPosition(
            async function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                console.log("Latitude:", lat);
                console.log("Longitude:", lon);

                try {
                    // Reverse geocoding using OpenStreetMap (free API)
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
                    );

                    const data = await response.json();

                    const city =
                        data.address.city ||
                        data.address.town ||
                        data.address.village ||
                        "your location";

                    output.textContent = `You are browsing from ${city} 📍`;
                } catch (error) {
                    console.error(error);
                    output.textContent = "Unable to fetch location name ⚠️";
                }
            },
            function (error) {
                console.error(error);

                if (error.code === error.PERMISSION_DENIED) {
                    output.textContent = "Location access denied ❌";
                } else {
                    output.textContent = "Error getting location ⚠️";
                }
            }
        );
    });

    console.log("Geolocation feature initialized");
}

initGeolocationFeature();