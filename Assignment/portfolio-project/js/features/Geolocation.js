function initGeolocationFeature() {
    const btn = document.getElementById("get-location");
    const output = document.getElementById("location-message");

    if (!btn || !output) {
        console.warn("Geolocation elements not found");
        return;
    }

    btn.addEventListener("click", function () {
        console.log("Location button clicked");

        if (!navigator.geolocation) {
            output.textContent = "Geolocation not supported ❌";
            return;
        }

        output.textContent = "Detecting location... ⏳";

        navigator.geolocation.getCurrentPosition(
            async function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                try {
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
                    output.textContent = "Failed to fetch location ⚠️";
                }
            },
            function (error) {
                console.error(error);
                output.textContent = "Location permission denied ❌";
            }
        );
    });
}

document.addEventListener("DOMContentLoaded", initGeolocationFeature);