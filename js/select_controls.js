function setFocus(element){
  element.focus();
}

window.onload = function() {
  var ele = document.getElementById('readable').childNodes[1]
  setFocus(ele)
}
