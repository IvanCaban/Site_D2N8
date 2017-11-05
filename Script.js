var headerAnim = function(delay){
	
	setTimeout(function(){
		animeteText();
		animeteSvg();
		animeteBacground();
	}, delay);

	function animeteBacground(){
		var header = document.getElementsByClassName("b-header")[0];
		header.style.background = "rgba(251,204,0,.0)";
	}

	function animeteText(){
		var textAnim = document.getElementsByClassName("m-header--anim-text");
		for(var i=0, len = textAnim.length; i<len ;i++){
			textAnim[i].style.color = "rgb(255,255,255)";
		}
	}

	function animeteSvg(){
		var svgLogo = document.getElementsByClassName("m-header--anim-svg");
		for(var i=0, len = svgLogo.length; i<len; i++){
			svgLogo[i].style.fill = "rgb(255,255,255)";
		}
		var svgArrow = document.getElementById("svg-arrow--path");
		svgArrow.style.stroke = 'rgb(255,255,255)';
	}
}
headerAnim(2000);

/********************************************************************/

var sectionAnim = function(){
	var titels = document.getElementsByClassName("section-title");
	var descriptions = document.getElementsByClassName("section-desc");
	var buttons = document.getElementsByClassName("section-button");
	var allAnimElements = titels.length + descriptions.length + buttons.length;
	var counter = 0;

	window.addEventListener("scroll", animeteSection);

	function animeteSection(){
		animeteSectionTitels();
		animeteSectionDesc();
		animeteSectionBtns();
		//когда все анимировалось снимаю слушатель собития
		if(counter >= allAnimElements){
			window.removeEventListener("scroll", animeteSection);
		}
	}
	function animeteSectionTitels(){
		for(var i=0, len = titels.length; i<len; i++){
			if(titels[i].classList.contains("section-title--showed")){
				continue;
			}else{
				var cords = titels[i].getBoundingClientRect();
				if(document.documentElement.clientHeight/2 >= cords.top){
					titels[i].classList.add("section-title--showed");
					counter++;
				}
			}
		}
	}

	function animeteSectionDesc(){
		for (var i = 0, len = descriptions.length; i<len; i++) {
			if(descriptions[i].classList.contains("section-desc--showed")){
				continue;
			} else {
				var cords = descriptions[i].getBoundingClientRect();
				if(document.documentElement.clientHeight/2 >= cords.top){
					descriptions[i].classList.add("section-desc--showed");
					counter++;
				}
			}
		}
	}

	function animeteSectionBtns(){
		for (var i = 0, len = buttons.length; i<len; i++) {
			if(buttons[i].classList.contains("section-button--showed")){
				continue;
			} else {
				var cords = buttons[i].getBoundingClientRect();
				if(document.documentElement.clientHeight/2 >= cords.top){
					buttons[i].classList.add("section-button--showed");
					counter++;
				}
			}
		}
	}
}
sectionAnim();