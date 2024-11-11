export function renderNav () {
    document.addEventListener("DOMContentLoaded", async function() {
        try {
            const response = await fetch("./navbar.html");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            let data = await response.text();
            document.getElementById("navbar-placeholder").innerHTML = data;
        } catch (error) {
            console.error("Error loading navbar:", error);
        }
    });
}