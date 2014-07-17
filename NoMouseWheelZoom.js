function mousewheelfn(e){
	if(e.ctrlKey){
  	e.preventDefault();
		e.stopPropagation();
	}
};

$(document).ready(function(){
	window.onmousewheel=document.onmousewheel=mousewheelfn;
});
