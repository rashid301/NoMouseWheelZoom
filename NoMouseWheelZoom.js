var isEnabled =false,isCtrl = false,CTRL_KEY=17,isWheel =false;

function mousewheelfn(e){
	isWheel=true;
	if(isCtrl){
  	e.preventDefault();
		e.stopPropagation();
	}
};

function keypressedfn(e){
	if(e.which == CTRL_KEY){
		isCtrl=true;
		if(isWheel){
			e.preventDefault();
			e.stopPropagation();
		}
	}
};

function keyreleasedfn(e){
	if(e.which == CTRL_KEY){
		isCtrl=false;
		isWheel=false;
	}
};


function initState(){
	isEnabled=false;
	isCtrl=false;
	isWheel=false;
};

$(document).ready(function(){
	initState();
	window.onmousewheel=document.onmousewheel=mousewheelfn;
	$(document).keydown(keypressedfn);
	$(document).keyup(keyreleasedfn);
});
