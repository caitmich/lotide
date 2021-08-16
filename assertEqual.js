const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log('🆘🆘🆘 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("myName", "myname");
assertEqual("myname", "myname");
assertEqual(3, 3);
assertEqual(3, 333);