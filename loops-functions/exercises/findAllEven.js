function findAllEven(arr) {
if (arr.length === 0){
  return null;
}
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

//Ignore this line of code
module.exports = findAllEven;
