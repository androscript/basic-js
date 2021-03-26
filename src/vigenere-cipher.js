const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (reverse = true) {
    this.reverse = !reverse;
  }

  encrypt(message, key) {
    let res = [];
    let pos1;
    let pos2;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let mesArr = message.toLowerCase().split('');
    let keyArr = key.toLowerCase().split('');
    for (let i = 0, j = 0; i < mesArr.length; i++) {
        if (alphabet.includes(mesArr[i])) {
          pos1 = alphabet.indexOf(mesArr[i]);
          if (j % keyArr.length === 0) {
            j = 0;          
          };
          pos2 = alphabet.indexOf(keyArr[j]);  
          if (pos1 + pos2 < alphabet.length) {
            res.push(alphabet[pos1 + pos2]);
          } else {
            res.push(alphabet[pos1 + pos2 - alphabet.length]);
          };
        } else {
          res.push(mesArr[i]);
          j--;
        };
      j++;
    };
    if (this.reverse) {
      return res.reverse().join('').toUpperCase();
    }
    return res.join('').toUpperCase();
  }
  
  decrypt(message, key) {
    let res = [];
    let pos1;
    let pos2;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let mesArr = message.toLowerCase().split('');
    let keyArr = key.toLowerCase().split('');
    for (let i = 0, j = 0; i < mesArr.length; i++) {
        if (alphabet.includes(mesArr[i])) {
          pos1 = alphabet.indexOf(mesArr[i]);
          if (j % keyArr.length === 0) {
            j = 0;          
          };
          pos2 = alphabet.indexOf(keyArr[j]);          
          if (pos1 >= pos2) {
            res.push(alphabet[pos1 - pos2]);
          } else {
            res.push(alphabet[alphabet.length - pos2 + pos1]);
          };
        } else {
          res.push(mesArr[i]);
          j--;
        };
      j++;
    };
    if (this.reverse) {
      return res.reverse().join('').toUpperCase();
    }
    return res.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
