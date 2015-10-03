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

function checkKey(e) {
    var event = window.event ? window.event : e;
    console.log(event.keyCode)
}

window.onload = function main() {
  var ele = document.getElementById('readable').childNodes[1];
  setFocus(ele);
  while (true) {
  document.onkeydown = checkKey;
  }
}
