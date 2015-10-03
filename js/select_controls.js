function setFocus(element){
  element.focus();
}

function nextText({
  setFocus(document.activeElement.nextElementSibling);
}

function lastText(){
  setFocus(document.activeElement.previousElementSibling);
}

window.onload = function() {
  var ele = document.getElementById('readable').childNodes[1];
  setFocus(ele);
}
