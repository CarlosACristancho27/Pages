const WIDTH = 400;
const HEIGH = 400;

let target = {
	x: getRandomNumber(WIDTH),
	y: getRandomNumber(HEIGH)
};

let $Map = document.getElementById('Map');
let $distance = document.getElementById('distance');
let clicks = 0;

$Map.addEventListener('click', function (e) {
	clicks++;
	let distance = getDistance(e, target);
	let distanceHint = getDistanceHint (distance);
	$distance.innerHTML = `<h1> ${distanceHint} </h1>`

	if (distance < 20) {
		alert(`Has encontrado el tesoro en ${clicks} clicks!`);
		location.reload();
	}
	
})
