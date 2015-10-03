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
    
    if (e.keyCode == '39') {
      nextText()
    }
    
    if (e.keyCode == '37') {
      lastText()
    }
}

window.onload = function main() {
  document.onkeydown = checkKey;
}
