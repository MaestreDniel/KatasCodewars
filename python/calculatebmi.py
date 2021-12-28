# https://www.codewars.com/kata/57a429e253ba3381850000fb

def bmi(weight, height):
  calcBmi = weight/height**2
  if calcBmi <= 18.5:
    return "Underweight"
  elif calcBmi <= 25:
    return "Normal"
  elif calcBmi <= 30:
    return "Overweight"
  else:
    return "Obese"