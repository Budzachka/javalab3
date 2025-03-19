(function () {

const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

const names2 = ["Bill", "John", "Jen", "Anna","Jason",  "Hannah", "Eve", "Steven","Ava", "Larry", "Paula", "Laura", "Jim"];

console.log("**********");

for (let i = 0; i < names.length; i++) {
  if (names[i].toLowerCase().charAt(0) === "j") {
    SpeakGoodBye.speak(names[i]);
  } else {
    SpeakHello.speak(names[i]);
  }
}

console.log("**********");
console.log("*Hello all people whose name matches forwards and backwards.");
console.log("**********");

function isReverse(namesArr) {
  const reversedNamesArr = namesArr.split('').reverse().join('');
  return namesArr === reversedNamesArr;
}


for (let i = 0; i < names2.length; i++) {
  if (isReverse(names2[i].toLowerCase())) {
    SpeakHello.speak(names2[i]);
    
  } else {
    SpeakGoodBye.speak(names2[i]);
  }
}

})();