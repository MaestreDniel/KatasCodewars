// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
  let calcBmi = weight / height ** 2;
  if (calcBmi <= 18.5) {
    return "Underweight";
  } else if (calcBmi <= 25) {
    return "Normal";
  } else if (calcBmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}