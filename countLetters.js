// assertEqual function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(words){
  
  const results = {};
  for(letters of words){
   if(letters !== ' '){ 
    //if that letter is already in the object
    if(results[letters]){
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  }
  return results;
};
console.log(countLetters('caitlin'));
console.log(countLetters('lighthouse labs'));
