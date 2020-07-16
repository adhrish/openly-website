function downloadcount(element, target){
	if(document.body.scrollTop>=80 && element.getAttribute('animated') == "false"){
			function counter(i=0) {
			if(i==target){
				element.setAttribute('animated', true);
				element.innerHTML= target;
			} else {
 				element.innerHTML= i;
				setTimeout(() => {
					counter(++i);
				}, 0);
			}		
		 }counter();
	}		
}

function animateCount() {
	const response = JSON.parse(localStorage.getItem('downloadCounts'));
	const items = [
		{
			element: document.getElementById("userpotnum"),
			target: response.users,
		},
		{
			element: document.getElementById("vendorpotnum"),
			target: response.stores,
		},
		{
			element: document.getElementById("orderpotnum"),
			target: response.orders,
		}];
	for(let i = 0; i < items.length; i++) {
		downloadcount(items[i].element, items[i].target);
	}
}

document.addEventListener('scroll', animateCount);






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