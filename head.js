const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("myName", "myname");
assertEqual("myname", "myname");
assertEqual(3, 3);
assertEqual(3, 333);
*/


const head = function(arr){
  return arr[0];
};
console.log(head([5, 6, 7]));
console.log(head(['hello', 6, 7]));


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");