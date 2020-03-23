// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create edge cases for unstringifiable objects (functions and undefined)
  // create cases for booleans, null, and numbers
  // create cases for functions and undefined
  /*if(obj === undefined || typeof(obj) === 'function') {
    return '';
  }*/

  if(obj === null) {
    return 'null';
  }

  var printedArray = [];
  //this is the case for returning strings
  if(typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  if(Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }

    for(var i = 0; i < obj.length; i++) {
      printedArray.push(stringifyJSON(obj[i]));
    }
    return '[' + printedArray.join(',') + ']';
  }


  //if obj is defined and an object
  if(obj && typeof(obj) === 'object') {
    if (obj.length === 0) {
      return '[]';
    }
    for(var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      }
      printedArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + printedArray.join(',') + '}';
  }

  //this is the case for returning booleans, null, and numbers
  return '' + obj;
};
