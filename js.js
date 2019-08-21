let a = parseInt(prompt("Enter your weight in kg: "));
let b = parseInt(prompt("Enter your height in meter: "));

let bmi = a / (b^2);

switch (true) {
    case (bmi < 18.5):
        document.write("You are Underweight!");
        break;
    case (bmi >= 18.5 && bmi < 25.0):
        document.write("Normal!");
        break;

    case (bmi >= 25.0 && bmi < 30.0):
        document.write("You are Overweight!");
        break;

    case (bmi >= 30.0):
        document.write("OBESE!");
        break;

}