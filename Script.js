var headerAnim = function(delay){
	
	setTimeout(animeteLogo, (delay/2)*0.25);
	setTimeout(animeteSupTitle, (delay/2)*0.5);
	setTimeout(animeteSubTitle, (delay/2)*0.75);
	setTimeout(animeteHeaderColor, delay);

	function animeteLogo(){
		var logo = document.querySelector(".b-header__logo");
		logo.classList.add("m-header__logo--showed");
	}

	function animeteSupTitle(){
		var supTitle = document.querySelector(".m-header__title--sup");
		supTitle.classList.add("m-header__title--sup--showed");
	}
	
	function animeteSubTitle(){
		var subTitle = document.querySelector(".m-header__title--sub");
		subTitle.classList.add("m-header__title--sub--showed");
	}
	function animeteHeaderColor(){
		animeteTextColor();
		animeteSvgColor();
		animeteBacgroundColor();
	}

	function animeteBacgroundColor(){
		var header = document.getElementsByClassName("b-header")[0];
		header.style.background = "rgba(251,204,0,.0)";
	}

	function animeteTextColor(){
		var textAnim = document.getElementsByClassName("m-header--anim-text");
		for(var i=0, len = textAnim.length; i<len ;i++){
			textAnim[i].style.color = "rgb(255,255,255)";
		}
	}

	function animeteSvgColor(){
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
				if(document.documentElement.clientHeight * 0.75 >= cords.top){
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
				if(document.documentElement.clientHeight * 0.75 >= cords.top){
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
				if(document.documentElement.clientHeight * 0.75 >= cords.top){
					buttons[i].classList.add("section-button--showed");
					counter++;
				}
			}
		}
	}
}
sectionAnim();

var workerSectionAnimate = function(){
	var workerSection = document.querySelector(".m-wrapper--workers");
	var workersImg = document.getElementsByClassName("worker__img");
	var workersInf = document.getElementsByClassName("worker__inf");
	var background = document.querySelector(".m-section--workers");

	window.addEventListener("scroll", animeteWorkerSection);
	
	function animeteWorkerSection(){
		if(document.documentElement.clientHeight * 0.25 >= workerSection.getBoundingClientRect().top){
			for (var i = 0, len = workersImg.length; i<len; i++) {
				workersImg[i].classList.add("m-worker__img--showed");		
			}

			for (var i = 0, len = workersInf.length; i < len; i++) {
				workersInf[i].classList.add("m-worker__inf--showed");
			}

			background.classList.add("m-section--workers--showed");
			
			window.removeEventListener("scroll", animeteWorkerSection);
		}
	}
}
workerSectionAnimate();


var workerDetailInf = function(){
	var natasha = document.querySelector(".m-worker--natasha");
	var natashaDetailInfo = document.querySelector(".m-worker__detait-inf--natasha");
	var natashaCloseArrea = document.querySelector(".m-worker__detait-inf--natasha>.worker__detait-inf__left");
	natashaDetailInfo.style.pointerEvents = "none";
	var natashaCloseBtn = document.querySelector(".m-worker__open-close--natasha");


	natasha.addEventListener("click", showNatashaDetailInf);
	natashaCloseArrea.addEventListener("click", hideNatashaDetailInf); 
	natashaCloseBtn.addEventListener("click", function(){
		if(natashaCloseBtn.classList.contains("m-worker__open-close--opened-natasha")){			
			hideNatashaDetailInf();	
		} else {
			showNatashaDetailInf();	
		}
	});

	function showNatashaDetailInf(){
		natashaDetailInfo.style.pointerEvents = "auto";
		natashaDetailInfo.classList.add("m-worker__detait-inf--showed");
		natashaCloseBtn.classList.add("m-worker__open-close--opened-natasha");
		igorCloseBtn.classList.add("m-worker__open-close--hide");
		if(document.documentElement.clientHeight <= 768){
			offScrollBody();
			document.querySelector(".m-section--workers").scrollIntoView(true);
		}
		
	}

	function hideNatashaDetailInf(){
		natashaDetailInfo.style.pointerEvents = "none";
		natashaDetailInfo.classList.remove("m-worker__detait-inf--showed");
		natashaCloseBtn.classList.remove("m-worker__open-close--opened-natasha");
		igorCloseBtn.classList.remove("m-worker__open-close--hide");
		onScrollBody();
	}

	var igor = document.querySelector(".m-worker--igor");
	var igorDetailInfo = document.querySelector(".m-worker__detait-inf--igor");
	var igorCloseArrea = document.querySelector(".m-worker__detait-inf--igor>.worker__detait-inf__left");
	igorDetailInfo.style.pointerEvents = "none";
	var igorCloseBtn = document.querySelector(".m-worker__open-close--igor");

	igor.addEventListener("click", showIgorDetailInf);
	igorCloseArrea.addEventListener("click", hideIgorDetailInf);
	igorCloseBtn.addEventListener("click", function(){
		if(igorCloseBtn.classList.contains("m-worker__open-close--opened-igor")){			
			hideIgorDetailInf();	
		} else {
			showIgorDetailInf();	
		}
	});

	function showIgorDetailInf(){
		igorDetailInfo.style.pointerEvents = "auto";
		igorDetailInfo.classList.add("m-worker__detait-inf--showed");
		igorCloseBtn.classList.add("m-worker__open-close--opened-igor");
		natashaCloseBtn.classList.add("m-worker__open-close--hide");
	}

	function hideIgorDetailInf(){
		igorDetailInfo.style.pointerEvents = "none";
		igorDetailInfo.classList.remove("m-worker__detait-inf--showed");
		igorCloseBtn.classList.remove("m-worker__open-close--opened-igor");
		natashaCloseBtn.classList.remove("m-worker__open-close--hide");
	}

	function offScrollBody(){
		document.body.style.overflow = "hidden";
	}
	function onScrollBody(){
		document.body.style.overflow = "auto";
	}


}
workerDetailInf();

var footerAnim = function(){
	var benefit = document.getElementsByClassName("benefit");
	var allAnimElements = benefit.length;
	var counter = 0;

	window.addEventListener("scroll", animeteBenefits);
	

	function animeteBenefits(){
		for (var i = 0, len = benefit.length; i < len; i++) {
			if(benefit[i].classList.contains("m-benefit--showed")){
				continue;
			} else {
				var cords = benefit[i].getBoundingClientRect();
				if(document.documentElement.clientHeight * 0.75 > cords.top){
					benefit[i].classList.add("m-benefit--showed");
					counter++;
				}
			}
		}
		if(counter >= allAnimElements){
			window.removeEventListener("scroll", animeteBenefits);
		}
	}
}
footerAnim();



var showHideNav = function(){
	var nav = document.querySelector(".section-nav");
	var closeNavBtn = document.querySelector(".section-nav__open-close");
	var checkBox = document.getElementById("open-close");

	window.addEventListener("scroll", fixedNav);

	function fixedNav(){	
		if(window.pageYOffset >= document.documentElement.clientHeight && document.documentElement.clientWidth > 768){
			if(!(nav.classList.contains("m-section-nav-fixed"))){
				nav.classList.add("m-section-nav-fixed");
			}
		} else if(window.pageYOffset < document.documentElement.clientHeight && document.documentElement.clientWidth > 768){
			if(nav.classList.contains("m-section-nav-fixed")){
				nav.classList.remove("m-section-nav-fixed");
			}
		} 

		if(window.pageYOffset >= document.documentElement.clientHeight && document.documentElement.clientWidth <= 768){
			if(!(closeNavBtn.classList.contains("m-section-nav__open-close--showed"))){
				closeNavBtn.classList.add("m-section-nav__open-close--showed");
			}
		} else if(window.pageYOffset < document.documentElement.clientHeight && document.documentElement.clientWidth <= 768 && checkBox.checked == false){
			if(closeNavBtn.classList.contains("m-section-nav__open-close--showed")){
				closeNavBtn.classList.remove("m-section-nav__open-close--showed");
			}
		}
	}
}
showHideNav();

var navScrollTo = function(){
	var navListLi = document.getElementsByClassName("section-nav__navigation__list__li");

	for (var i = 0, len = navListLi.length; i < len; i++) {
		navListLi[i].addEventListener("click", scrollNavByClick);
	}

	function scrollNavByClick(){
		var elem = document.getElementById(this.dataset.id);
		var elemTop = elem.getBoundingClientRect().top;
		var timer;

		if(elemTop > 0){
			scrollUp();
		} else {
			scrollDown();
		}

		function scrollUp(){
			if(elemTop > 0){
				window.scrollBy(0, 25);
				elemTop -= 25;
				timer = setTimeout(scrollUp, 10);
			} else {
				clearTimeout(timer);
			}
		}

		function scrollDown(){
			if(elemTop < 0){
				window.scrollBy(0, -25);
				elemTop += 25;
				timer = setTimeout(scrollDown, 10);
			} else {
				clearTimeout(timer);
			}

		}
	}
}
navScrollTo();

var navSelected = function(){
	window.addEventListener("scroll", checkSelectSection);
	var sections = document.getElementsByClassName("m-section--for-nav");
	var navListLi = document.getElementsByClassName("section-nav__navigation__list__li");

	function checkSelectSection(){
		for (var i = 0, len = sections.length; i < len; i++) {
			var top = sections[i].getBoundingClientRect().top;
			
			if(top >= -50 && top <= 50){
				selectListLi(sections[i].id);
			}
		}
 	}
 	function selectListLi(id){
 		for (var i = 0, len = navListLi.length; i < len; i++) {
 			if(navListLi[i].dataset.id == id){
 				navListLi[i].classList.add("m-section-nav__navigation__list__li--selected");
 			} else {
 				if (navListLi[i].classList.contains("m-section-nav__navigation__list__li--selected")) {
 					navListLi[i].classList.remove("m-section-nav__navigation__list__li--selected");
 				}
 			}
 		}
 	}
}
navSelected();