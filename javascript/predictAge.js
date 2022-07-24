// https://www.codewars.com/kata/5aff237c578a14752d0035ae

function predictAge(a1, a2, a3, a4, a5, a6, a7, a8) {
  let ages = [a1, a2, a3, a4, a5, a6, a7, a8];

  ages.forEach((age, i) => {
    ages[i] = age * age;
  });

  let sum = ages.reduce((a, b) => a + b, 0);

  let result = Math.trunc(Math.sqrt(sum) / 2);

  return result;
}

console.log(predictAge(64, 73, 56, 82, 62, 77, 70, 62));
