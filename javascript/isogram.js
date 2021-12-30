// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  str = str.toLowerCase();
  let chars = {"q": 0, "w": 0, "e": 0, "r": 0, "t": 0, "y": 0, "u": 0, "i": 0, "o": 0, "p": 0,
    "a": 0, "s": 0, "d": 0, "f": 0, "g": 0, "h": 0, "j": 0, "k": 0, "l": 0,
    "z": 0, "x": 0, "c": 0, "v": 0, "b": 0, "n": 0, "m": 0
  };

  for (let i = 0; i < str.length; i++) {
    for (let letra in chars) {
      if (str[i] === letra) {
        chars[letra]++;
      }
      if (chars[letra] > 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("holaAAa"));
console.log(isIsogram("hoooolaaaa"));
console.log(isIsogram("hola"));