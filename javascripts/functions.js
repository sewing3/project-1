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
  var largest = 0;
  array.forEach(function(elem) {
    if (largest < elem) largest = elem;
  });
  return largest;
}
