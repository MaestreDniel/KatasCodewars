// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  string = string.toLowerCase();
  let chars = {"q": 0, "w": 0, "e": 0, "r": 0, "t": 0, "y": 0, "u": 0, "i": 0, "o": 0, "p": 0,
    "a": 0, "s": 0, "d": 0, "f": 0, "g": 0, "h": 0, "j": 0, "k": 0, "l": 0,
    "z": 0, "x": 0, "c": 0, "v": 0, "b": 0, "n": 0, "m": 0
  };

  for (let i = 0; i < string.length; i++) {
    for (let letra in chars) {
      if (string[i] === letra) {
        chars[letra]++;
      }
    }
  }

  for (let letra in chars) {
    if (chars[letra] < 1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // Pangrama
console.log(isPangram("hoooolaaaa esto no es un pangrama")); // Efectivamente, no lo es
console.log(isPangram("abcdefghijklmopqrstuvwxyz ")); // Falta la n
console.log(isPangram("A pangram is a sentence that contains every single letter of the alphabet at least once.")); // Faltan algunas letras
console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn")); // Pangrama
console.log(isPangram("Pack my box with five dozen liquor jugs.")); // Pangrama