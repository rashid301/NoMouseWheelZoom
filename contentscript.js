var s2 = document.createElement('script');
s2.src = chrome.extension.getURL('NoMouseWheelZoom.min.js');
s2.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s2);
