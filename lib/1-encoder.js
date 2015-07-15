'use strict';

var subs = {
  'a': '4',
  'b': '6',
  'e': '3',
  'g': '8',
  's': '5',
  ' ': '$'
};

var encoder = function(str){
  //code your solution here
  var letter_normalized, encoded = [];
  
  str.split("").forEach( function(letter) {
    letter_normalized = letter.toLowerCase();
    if (subs[letter_normalized]) {
      encoded.push(subs[letter_normalized]);
    }
    else {
      encoded.push(letter);
    }
  });
  return encoded.reverse().join("");
};
