function getTabStops(o, a, el) {
    // Check if this element is a tab stop
    if (el.tabIndex > 0) {
        if (o[el.tabIndex]) {
            o[el.tabIndex].push(el);
        } else {
            o[el.tabIndex] = [el];
        }
    } else if (el.tabIndex === 0) {
        // Tab index "0" comes last so we accumulate it seperately
        a.push(el);
    }
    // Check if children are tab stops
    for (var i = 0, l = el.children.length; i < l; i++) {
        getTabStops(o, a, el.children[i]);
    }
}

function focusNext() {
    var o = [],
        a = [],
        stops = [],
        active = document.activeElement;
    getTabStops(o, a, document.body);
    // Use simple loops for maximum browser support
    for (var i = 0, l = o.length; i < l; i++) {
        if (o[i]) {
            for (var j = 0, m = o[i].length; j < m; j++) {
                stops.push(o[i][j]);
            }
        }
    }
    for (var i = 0, l = a.length; i < l; i++) {
        stops.push(a[i]);
    }
    // If no items are focusable, then blur
    if (stops.length === 0) {
        active.blur();
        return;
    }
    // Shortcut if current element is not focusable
    if (active.tabIndex < 0) {
        stops[0].focus();
        return;
    }
    // Attempt to find the current element in the stops
    for (var i = 0, l = stops.length; i < l; i++) {
        if (stops[i] === active) {
            if (i + 1 === stops.length) {
                active.blur();
                return;
            }
            stops[i+1].focus();
            return;
        }
    }
    // We shouldn't make it this far
    active.blur();
}

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
      e.preventDefault();
        focusNext();
    }
    
    if (e.keyCode == '37') {
      lastText()
    }
}

window.onload = function main() {
  var ele = document.getElementById('readable').childNodes[1];
  setFocus(ele);
  document.onkeydown = checkKey;
}
