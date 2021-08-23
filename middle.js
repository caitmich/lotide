

//middle function:
const middle = function(param){
  let newArr = [];
  let half = 0;
    if((param.length === 1) || (param.length === 2)){
      return newArr = [ ];
    }
    if(param.length % 2 === 0){
      //divide the array in half
      half = param.length/2;
      newArr.push(param[half -1]);
      newArr.push(param[half]);
    } 
    if(param.length % 2 !== 0){
      //divide in half and round up
      half = Math.floor(param.length/2);
      newArr.push(param[half]);
    }
  return newArr;
};

module.exports = middle;