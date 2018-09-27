function findAverage(arr) {
if (arr.length === 0){
  return null;
}
const arrAvg = arr.reduce((a,b) => a + b, 0) / arr.length;

return arrAvg;
}
//Ignore this line of code
module.exports = findAverage;
