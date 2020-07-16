function scrollHeader() {
	if(document.body.scrollTop <= 40){
	document.getElementById("header").style.height = "8vw";
	document.getElementById("header").style.boxShadow="none";
	document.getElementById("header-logo").style.height="5vw";
	}
	else if (document.body.scrollTop >=40){
		document.getElementById("header").style.height = "3.5vw";
		document.getElementById("header").style.boxShadow="0 0 1vw rgba(0,0,0,0.05)";
		document.getElementById("header-logo").style.height="2.7vw"
		
	}
}