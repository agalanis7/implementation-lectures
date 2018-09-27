function findSmallest(arr) {
if (arr.length === 0){
  return null;
}

const arrMin = Math.min(...arr);
return arrMin;
};
//Ignore this line of code
module.exports = findSmallest;
