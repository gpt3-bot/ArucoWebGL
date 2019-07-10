const direction = document.getElementById('degree');

function deviceOrientationListener (event) {
  let alpha = event.alpha;
  let degree = alpha > (360 - alpha) ? (360 - alpha) : alpha;
  direction.innerHTML = degree.toFixed(0) + '&deg';
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', deviceOrientationListener);
}
