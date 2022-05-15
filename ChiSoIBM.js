function  chiSoBmi() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / (Math.pow(height, 2));
    let result = "";
    if (bmi < 18) {
        result = "Underweight"
    } else if (bmi < 25) {
        result = "Normal"
    } else if (bmi < 30) {
        result = "Overweight"
    }else {
        result = "Obese"
    }
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + result
}
// document.getElementById("kiemTra").addEventListener('click', chiSoBmi);

