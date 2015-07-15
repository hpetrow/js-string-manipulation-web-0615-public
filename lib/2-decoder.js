'use strict';

var decoded_subs = {
  '4': 'a',
  '6': 'b',
  '3': 'e',
  '8': 'g',
  '5': 's',
  '$': ' '
};

var decoder = function(str){
  var letter_normalized, decoded = [];

  str.split("").forEach(function(letter) {
    letter_normalized = letter.toLowerCase();
    if (decoded_subs[letter_normalized]) {
      decoded.push(decoded_subs[letter_normalized]);
    }
    else {
      decoded.push(letter);
    }
  });
  return decoded.reverse().join("");
};
