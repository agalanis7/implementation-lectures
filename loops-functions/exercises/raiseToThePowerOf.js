function raiseToThePowerOf(arr, number) {
  if (arr.length === 0){
    return null;
  }
  //take each array element and raise it to the power of exp
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] ** number;
  }
return arr;
}
//   let ret = [];
//   arr.forEach(function(element){
//     ret.push(Math.pow(element, number));
//   })
//
// arr = ret;
//   return arr;
//}
//Ignore this line of code
module.exports = raiseToThePowerOf;
