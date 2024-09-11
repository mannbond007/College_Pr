function generateRandomNumber() {
    let minRange = parseInt(document.getElementById("minRange").value);
    let maxRange = parseInt(document.getElementById("maxRange").value);

    // Validate input
    if (isNaN(minRange) || isNaN(maxRange)) {
        alert("Please enter valid numbers for both the minimum and maximum range.");
        return;
    }

    if (minRange >= maxRange) {
        alert("Minimum range must be less than maximum range.");
        return;
    }

    var randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    document.getElementById("numberGenerated").innerText = randomNumber;
    document.querySelector('.result').style.display = '';
}