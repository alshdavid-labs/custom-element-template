/* global exports */

function init() {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    style.sheet.insertRule("body { visibility: hidden; }", 0);
  }
  
  function scoper(css, prefix) {
    var re = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)", "g");
    css = css.replace(re, function(g0, g1, g2) {
  
      if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
        return g1 + g2;
      }

      if (g1.match(/:host/)) {
        g1 = g1.replace(/([^\s]*):host/, function(h0, h1) {
          if (h1 === "") {
            return "";
          } 
        });
      }
  
      if (g1.match(/:scope/)) {
        g1 = g1.replace(/([^\s]*):scope/, function(h0, h1) {
          if (h1 === "") {
            return "> *";
          } else {
            return "> " + h1;
          }
        });
      }
  
      g1 = g1.replace(/^(\s*)/, "*[" + prefix + "] ");
  
      return g1 + g2;
    });
    
    return css;
  }
  
  function process() {
    var styles = document.body.querySelectorAll("style[scoped]");
  
    if (styles.length === 0) {
      document.getElementsByTagName("body")[0].style.visibility = "visible";
      return;
    }
  
    var head = document.head || document.getElementsByTagName("head")[0];
    var newstyle = document.createElement("style");
    var csses = "";
  
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      var css = style.innerHTML;
  
      if (css && (style.parentElement.nodeName !== "BODY")) {
        var prefix = `csspointer${i}`;
        
        var parent = style.parentNode;
        var grandparent = parent.parentNode;

        parent.setAttribute(prefix, '')
                
        style.parentNode.removeChild(style);
  
        csses = csses + scoper(css, prefix);
      }
    }
  
    if (newstyle.styleSheet){
      newstyle.styleSheet.cssText = csses;
    } else {
      newstyle.appendChild(document.createTextNode(csses));
    }
  
    head.appendChild(newstyle);
    document.getElementsByTagName("body")[0].style.visibility = "visible";
  }
  
  (function() {
    "use strict";
  
    if ("scoped" in document.createElement("style")) {
      return;
    }
    
    init();
  
    if (document.readyState === "complete" || document.readyState === "loaded") {
      process();
    } else {
      document.addEventListener("DOMContentLoaded", process);
    }
  }());
  
  if (typeof exports !== "undefined") {
    exports.scoper = scoper;
  }
  
  
  
  //////////////////
  // WEBPACK FOOTER
  // ./node_modules/css-scoper/scoper.js
  // module id = 5
  // module chunks = 0