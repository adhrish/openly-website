
//toRotate = true if data exists, period time to stop before starting to erase
var rotation = function(el, toRotate, time) {
	this.time = parseInt(time, 10) || 3000; //wait time between characters
	this.toRotate = toRotate; // if exists we get an array of words/sentences
	this.el = el;
	this.text = '';
	this.erase = false;
	this.isDeleting = false;
	this.loopNum = 0;
	this.animate();
}

rotation.prototype.animate = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullText = this.toRotate[i];
	var flickTime = this.time/fullText.length;
	
	if(this.isDeleting) {
		this.text = fullText.substring(0, this.text.length - 1);
	} else {
		this.text = fullText.substring(0, this.text.length + 1);
	}
	this.el.innerHTML = `<span style="border-right: 0.08em solid #666">${this.text}</span>`;

	  if(fullText === this.text) {
		  flickTime=3000;
		  this.isDeleting = true;
	  }else if (this.text==='') {
		  this.loopNum++;
		  this.isDeleting = false;
	  }
  setTimeout(() => {
	  this.animate();
  }, this.isDeleting ? flickTime/2 : flickTime);
}

window.onload = () => {
	var elements = document.getElementsByClassName('text-animation');
	for(var i=0; i<elements.length; i++) {
	  var toRotate = JSON.parse( elements[i].getAttribute('data-rotate') );
	  var time = elements[i].getAttribute('data-time');
	  if(toRotate) {
		  new rotation(elements[i], toRotate, time);
	  }
	}
};



// for download count
function downloadcount(element, target){
	if(element.getAttribute('animated') == "false"){
			function counter(i=0) {
			if(i==target){
				element.setAttribute('animated', true);
				element.innerHTML= target;
			} else {
 				element.innerHTML= i;
				setTimeout(() => {
					counter(++i);
				}, 75);
			}		
		 }counter(target-15);
	}		
}

function animateCount() {

		const response = JSON.parse(localStorage.getItem('downloadCounts'));
		const items = [
			{
				element: document.getElementById("userpotnum"),
				target: 100,
				// target: response.users,
			},
			{
				element: document.getElementById("vendorpotnum"),
				target: 100,
				// target: response.stores,
			},
			{
				element: document.getElementById("orderpotnum"),
				target: 100,
				// target: response.orders,
			}];
		for(let i = 0; i < items.length; i++) {
			downloadcount(items[i].element, items[i].target);
		}
	
}



let animateVariable=false;

document.addEventListener('scroll', () => {
	if (document.body.scrollTop>=156&&!animateVariable){
		animateCount();
		animateVariable=true;
		}
	}
)









// api call
function getDownloadCount() {

	const options = {
		method: 'get',
	};

	fetch('https://openly-test-heroku.herokuapp.com/api/0OnapDD7qF4ULklkfQLJDGnqAKlbHqD2mMuNwVoOuCz7sRLunX/get_stats')
	.then(function(response) {
		return response.json();
	}).then(function(response) {
		localStorage.setItem('downloadCounts', JSON.stringify(response));
	})
	.catch(function(error){
		console.log(error);
	})
}


getDownloadCount();