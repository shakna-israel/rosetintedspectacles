function setFocus(element){
  element.focus();
  return document.activeElement;
}

function nextText(){
  setFocus(document.activeElement.nextElementSibling);
  return document.activeElement;
}

function lastText(){
  setFocus(document.activeElement.previousElementSibling);
  return document.activeElement;
}

window.onload = function main() {
  var ele = document.getElementById('readable').childNodes[1];
  setFocus(ele);
}
