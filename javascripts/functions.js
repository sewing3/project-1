// jshint esversion: 6

function arrAvg(array) {
  var numCount = array.length;
  var sum = 0;
  for (var i = 0; i < numCount; i++) {
    sum += array[i];
  }
  var avg = sum / numCount;
  return avg;
}

function arrMax(array) {
  return Math.max(array);
}

let temps = [31.9, 31.3, 42.4, 42.4, 60.8];
let sum = 0,
  average;
for (var i = 0; i < temps.length; i++) {
  sum += temps[i];
}
average = sum / temps.length;
console.log(average);
