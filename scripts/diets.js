document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitbutton").addEventListener("click", function () {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value); // Height should be in meters
        const age = parseInt(document.getElementById("age").value);
        const genderElement = document.querySelector('input[name="gender"]:checked');

        if (!weight || !height || !age || !genderElement || weight <= 0 || height <= 0 || age <= 0) {
            document.getElementById("result").innerText = "⚠️ Please enter valid values!";
            return;
        }

        const gender = genderElement.value;
        const bmi = weight / (height * height);
        let bmiCategory = bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal weight" : bmi < 29.9 ? "Overweight" : "Obesity";

        // Corrected BMR formula (height should be in meters)
        let bmr = gender === "male"
            ? 10 * weight + 6.25 * height * 100 - 5 * age + 5
            : 10 * weight + 6.25 * height * 100 - 5 * age - 161;

        // TDEE calculation with a default activity multiplier (moderate activity = 1.55)
        const tdee = bmr * 1.55;

        document.getElementById("result").innerHTML = `
            <strong>Your BMI:</strong> ${bmi.toFixed(2)} <br>
            <strong>Category:</strong> ${bmiCategory} <br>
            <strong>Estimated BMR:</strong> ${bmr.toFixed(2)} cal/day <br>
            <strong>Daily Calories Needed (TDEE):</strong> ${tdee.toFixed(2)} cal/day
        `;
    });
});
