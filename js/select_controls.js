function setFocus(element){
  element.focus();
}

function nextText(element){
  setFocus(element.nextElementSibling);
  return element.nextElementSibling;
}

function lastText(element){
  setFocus(element.previousElementSibling);
  return element.previousElementSibling;
}

window.onload = function() {
  var ele = document.getElementById('readable').childNodes[1];
  setFocus(ele);
}
