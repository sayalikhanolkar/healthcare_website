ocument.getElementById("submitbutton").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value); // Height in meters
    const age = parseInt(document.getElementById("age").value);
    const genderElement = document.querySelector('input[name="gender"]:checked');

    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0 || !genderElement) {
        document.getElementById("result").innerText = "Please enter valid values for weight, height, age, and gender.";
        return;
    }

    const gender = genderElement.value;

    const bmi = weight / (height * height);
    let bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height * 100 - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height * 100 - 5 * age - 161;
    }

    const tdee = bmr * 1.55;
    document.getElementById("result").innerText = `Your BMI is: ${bmi.toFixed(2)} (${bmiCategory})\nCalories to maintain your weight: ${tdee.toFixed(2)} kcal/day`;
});
