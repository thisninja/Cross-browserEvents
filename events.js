var Event = {
  addEvent: function(el, event, func) {
    if (typeof addEventListener !== undefined) {
      el.addEventListener(event, func, false);
    }
    else if (typeof attachEvent !== undefined) {
      el.attachEvent('on' + event, func);
    }
    else {
      el['on' + event] = func;
    }
  },
  removeEvent: function(el, event, func) {
    if (el.removeEvent !== undefined) {
      el.removeEvent(event, func, false);
    }
    else if (el.detachEvent !== undefined) {
      el.detachEvent('on' + event, func)
    }
    else {
      el['on' + event] = null;
    }
  },
  preventDefault: function(e) {
    e = e || window.event;
    if (e.preventDefault !== undefined) {
      e.preventDefault();
    }
    else if (e.returnValue !== undefined) {
      e.returnValue = false;
    }
  },
  target: function(e) {
    if (e.target !== undefined) {
      return e.target;
    }
    else if (e.srcElement !== undefined) {
      return e.srcElement;
    }
  }
};