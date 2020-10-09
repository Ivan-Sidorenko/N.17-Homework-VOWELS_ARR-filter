"use strict";

var simpleString = prompt("Введите строку");

function countVowels() {
  var vowelSet={"а":true, "е":true, "ё":true, 
                "и":true, "о":true, "у":true, 
                "ы":true, "э":true, "ю":true, "я":true};
  
  var sS = simpleString.toLowerCase().split("").filter(function(matchCheck){
    return (matchCheck in vowelSet)
  }); 
  return sS.length;
}

alert ("Количество гласных: "+countVowels());