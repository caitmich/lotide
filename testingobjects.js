

const eqObjects = function (obj1, obj2) {

  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

    if (key1.length !== key2.length) {
    return false;
  }
  for(props of key1){
    if(obj1.props === key2){
      
    }
  } 

 return true;
  };




const cd = { 
  c: "1", 
  d: ["2", 3],
};
const dc = { 
  d: ["2", 3],
  c: "1" 
};

const cd2 = { 
  c: "1", 
  d: ["2", 3, 4] 
};


console.log(eqObjects(cd, cd2));