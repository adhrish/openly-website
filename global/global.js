function scrollHeader() {
	const ele = document.querySelector("header .header-items #header-logo");
	if(document.body.scrollTop >= 40){
		document.getElementById("header").style.height = "3.5vw";
		document.getElementById("header").style.boxShadow="0 0 1vw rgba(0,0,0,0.05)";
		ele.style.height="3vw";
		// document.getElementById("header-logo").style.height="2.7vw"
		
	}
	else{
	document.getElementById("header").style.height = "8vw";
	document.getElementById("header").style.boxShadow="none";
	ele.style.height="5vw";
	// document.getElementById("header-logo").style.height="5vw";
	}

}