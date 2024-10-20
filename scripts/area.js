// Function to display the text input field when "Other" is selected
document.addEventListener("DOMContentLoaded", function() {
    const policeStationSelect = document.getElementById("police-station");
    const otherInputDiv = document.getElementById("other-input");

    policeStationSelect.addEventListener("change", function() {
        if (this.value === "other") {
            otherInputDiv.style.display = "block"; // Show the text input
        } else {
            otherInputDiv.style.display = "none"; // Hide the text input
        }
    });
});
