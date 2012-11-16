// Code originally found: https://github.com/freelancephp/DOMReady/blob/master/src/domready.js

module.exports = function(ready){	

	if (window.addEventListener) {
		window.document.addEventListener('DOMContentLoaded', ready, false);
	} else {
		// for IE
		// code taken from http://ajaxian.com/archives/iecontentloaded-yet-another-domcontentloaded
		(function(){
			// check IE's proprietary DOM members
			if (!window.document.uniqueID && window.document.expando)
				return;

			// you can create any tagName, even customTag like <document :ready />
			var tempNode = window.document.createElement('document:ready');

			try {
				// see if it throws errors until after ondocumentready
				tempNode.doScroll('left');

				// call ready
				ready();
			} catch (err) {
				setTimeout(arguments.callee, 0);
			}
		})();
	}

};