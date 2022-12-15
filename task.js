module.exports.stringLength = function (string) {
  if(string.length < 1 || string.length > 10){
    return 'string is too short or long';
  } else {
    return string.length;
  }
}

module.exports.reverseString = function (string) {
  return string.split('').reverse().join('');
}

module.exports.Calculator = class {
  constructor () {
  }

  add (x, y) {
    return x + y;
  }

  subtract (x, y) {
    return x - y;
  }
  
  divide (x, y) {
    return x / y;
  }

  multiply (x, y) {
    return x * y;
  }
}

module.exports.capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}