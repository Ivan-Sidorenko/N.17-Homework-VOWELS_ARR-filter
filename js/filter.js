"use strict";

function countVowels() {
  var vowelSet={"а":true, "е":true, "ё":true, 
                "и":true, "о":true, "у":true, 
                "ы":true, "э":true, "ю":true, "я":true};
  
  var simpleString = prompt("Введите строку").toLowerCase().split("").filter(function(matchCheck){
    return (matchCheck in vowelSet)
  }); 
  return simpleString.length;
}

alert ("Количество гласных: "+countVowels());