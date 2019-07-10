const direction = document.getElementById('degree');

function deviceOrientationListener(event) {
	let alpha = event.alpha;
	let degree = alpha > 360 - alpha ? 360 - alpha : alpha;
	direction.innerHTML = alpha;
}

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', deviceOrientationListener);
}
