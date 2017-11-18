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

var showDetailWorkersInf = function(){
	var workers = document.getElementsByClassName("worker");
	var workersDetailInf = document.querySelector(".worker__detait-inf");
	var closeBtn = document.querySelector(".worker__detait-inf__close-btn");
	
	var igor = document.querySelector(".m-worker--igor");
	var igorImg = document.querySelector(".m-worker__img--igor");
	var igorInfo = document.querySelector(".m-worker__inf--igor");
	var detailInfIgor = document.querySelector(".worker__detait-inf--igor");
	

	var natasha = document.querySelector(".m-worker--natasha"); 
	var natashaImg = document.querySelector(".m-worker__img--natasha");
	var natashaInfo = document.querySelector(".m-worker__inf--natasha");
	var natashaDetailInfo = document.querySelector(".worker__detait-inf--natasha"); 

	
	for (var i = 0, len = workers.length; i < len; i++) {
		workers[i].addEventListener("click", showWorkerInfo);
	}
	closeBtn.addEventListener("click", hideWorkerInfo);


	workersDetailInf.style.pointerEvents = "none";
	function showWorkerInfo(){
		workersDetailInf.style.pointerEvents = "auto";
		switch(this.dataset.workerName){
			case "natasha":
				showNatashaDetailInfo();
				break;
			case "igor":
				showIgorDetailInfo();
				break;

		}
		workersDetailInf.classList.add("m-worker__detait-inf--showed");
		closeBtn.classList.add("m-worker__detait-inf__close-btn--showed");
	}

	function hideWorkerInfo(){
		workersDetailInf.classList.remove("m-worker__detait-inf--showed");
		closeBtn.classList.remove("m-worker__detait-inf__close-btn--showed");
		workersDetailInf.style.pointerEvents = "none";
		

		if(igor.classList.contains("m-igor-hide")){
			hideNatashaDetailInfo();
		}
		if(natasha.classList.contains("m-hatasha-hide")){
			hideIgorDetailInfo();
		}
				
	}

	function showNatashaDetailInfo(){
		natashaDetailInfo.classList.add("m-worker__detait-inf--natasha--showed");
		igor.style.pointerEvents = "none";
		igor.classList.add("m-igor-hide");
		natashaImg.classList.add("m-worker__img--hatasha--showed-with-detail");
		natashaInfo.classList.add("m-worker__inf--natasha--showed-with-detail");
		natasha.style.pointerEvents = "none";	
	}
	function hideNatashaDetailInfo(){
		natashaDetailInfo.classList.remove("m-worker__detait-inf--natasha--showed");
		igor.classList.remove("m-igor-hide");
		igor.style.pointerEvents = "auto";
		natashaImg.classList.remove("m-worker__img--hatasha--showed-with-detail");
		natashaInfo.classList.remove("m-worker__inf--natasha--showed-with-detail");
		natasha.style.pointerEvents = "auto";	
	}

	function showIgorDetailInfo(){
		natasha.classList.add("m-hatasha-hide");
		natasha.style.pointerEvents = "none";		
		detailInfIgor.classList.add("m-worker__detait-inf--igor--showed");
		igorImg.classList.add("m-worker__img--igor--showed-with-detail");
		igorInfo.classList.add("m-worker__inf--igor--showed-with-detail");
		igor.style.pointerEvents = "none";
	}
	function hideIgorDetailInfo(){
		detailInfIgor.classList.remove("m-worker__detait-inf--igor--showed");
		igorImg.classList.remove("m-worker__img--igor--showed-with-detail");
		natasha.style.pointerEvents = "auto";
		natasha.classList.remove("m-hatasha-hide");
		igorInfo.classList.remove("m-worker__inf--igor--showed-with-detail");
		igor.style.pointerEvents = "auto";
	}
}	
showDetailWorkersInf();

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