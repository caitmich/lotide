const assertEqual = require('./assertEqual');



const head = function(arr){
  return arr[0];
};
// console.log(head([5, 6, 7]));
// console.log(head(['hello', 6, 7]));


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;