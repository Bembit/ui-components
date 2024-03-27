const initialCountdown = 5;
console.log("initialCountdown:", initialCountdown);
const animationTimeout = 5000;
console.log("animationTimeout:", animationTimeout);

// start the loading bar
function startLoadingBar(initialCountdown) {
	resetLoadingBar();
	const loadingBar = document.getElementById('loadingBar');
	const loadingBarText = document.getElementById('loadingBarText');

	let countdown = initialCountdown;

	loadingBarText.textContent = countdown;
	loadingBar.style.animationPlayState = 'running'; 

	// set up a counter
	// check with requestanimationframe
	const countdownInterval = setInterval(function() {
		countdown--;
	//   console.log(countdown);
	//   console.log("type:", typeof countdown)
	//   console.log("isNaN?" ,isNaN(countdown))
		loadingBarText.textContent = countdown; // Update countdown text

		if (countdown === 0) {
			clearInterval(countdownInterval);
			countdown === initialCountdown; 
		}
	}, 1000); // coundown update

	// reset the loading bar after 5 seconds
	setTimeout(function() {
		// dont forget to pass the initialCountdown
		startLoadingBar(initialCountdown);
	}, animationTimeout);
}

// reset the loading bar
function resetLoadingBar() {
	const loadingBar = document.getElementById('loadingBar');
	loadingBar.style.animation = 'none'; // remove the animation
	void loadingBar.offsetWidth; // trigger reflow
	loadingBar.style.animation = ''; // reset animation
}
  
window.onload = function() {
	startLoadingBar(initialCountdown);
};