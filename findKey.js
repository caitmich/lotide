const findKey = function(obj1, callback){

  for(const key in obj1){
    
    let response = callback(obj1[key])
    if(response === true){
      return key;
    }
    
  }
  return undefined;
};


const evalFunc = findKey(
  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, 

(x) => x.stars === 2
); // => "noma"


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(evalFunc, 'noma');
