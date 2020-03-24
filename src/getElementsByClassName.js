// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {

  // your code here
  var elementArray = [];

  node = node || document.body;

  if (node.classList.contains(className)) {
    elementArray.push(node);
  }


    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].nodeType===1){
      elementArray = elementArray.concat(getElementsByClassName(className, node.childNodes[i]));
     }
  }
return elementArray;

};
