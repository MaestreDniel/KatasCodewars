// https://www.codewars.com/kata/586bca7fa44cfc833e00005c

function createArrayOfTiers(num) {
  let numer = String(num);
  let tiers = [];
  let total = "";
  for (let i = 0; i < numer.length; i++) {
    total += numer[i];
    tiers.push(total);
  }
  return tiers;
}