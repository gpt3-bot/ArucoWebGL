const line = document.querySelector('img')
const direction = document.getElementById('degree')

function deviceOrientationListener (event) {
  let alpha = event.alpha
  let degree = alpha > (360 - alpha) ? (360 - alpha) : alpha
  direction.innerHTML = degree.toFixed(0) + '&deg'
  line.style.transform = 'rotate(' + alpha + 'deg)'
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', deviceOrientationListener)
}
