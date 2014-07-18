function mousewheelfn(e){
	if(e.ctrlKey){
  	e.preventDefault();
		e.stopPropagation();
	}
};

window.onmousewheel=document.onmousewheel=mousewheelfn;
