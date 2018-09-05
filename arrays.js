var chocolateBars = ["snickers" ,"hundred grand", "kitkat", "skittles"];
// var cities = ["New York", "San Francisco"];
// cities = ["Philadelphia", ...cities];
// const cats = ["Milo", "Garfield"];
// const moreCats = ["Felix", ...cats];
// var myArray = [1, 2, 3];
// myArray[5] = 5;
//
function addElementToBeginningOfArray(array, element) {
  var array = [];
  ["element", ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  var array = [];
  arr.unshift(element);
  return arr
}

function addElementToEndOfArray(arr, element){
  var arr = [];
  [...arr, "element"];
  return arr
}

function destructivelyAddElementToEndOfArray(arr, element){
  var array = [];
  arr.shift(element)
  return arr
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  var arr = [];
  arr.shift()
}