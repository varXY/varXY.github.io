
function init() {
	if (navigator.geolocation) {
		document.getElementById("notify").innerHTML = "We are trying to find you";
		navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
	} else {
		document.getElementById("notify").innerHTML = "Your browser doesn't support GEO location";
	}
}

function successFunc(pos) {
	var lat = pos.coords.latitude;
	var long = pos.coords.longitude;
	document.getElementById("notify"),innerHTML = "You are at lat: " + lat + "Long" + long;
}

function errorFunc(pos) {
	document.getElementById("notify"),innerHTML = "error";
}

function setName() {
	var userName = document.getElementById("yourName").value;
	if (userName === "") return false;
	localStorage.setItem("name", userName);
	document.getElementById("yourName").value = "Name Saved";
}

function getName() {
	var name = localStorage.getItem("name")
	if (name === null) return false;
	document.getElementById("yourName").value = "Name Stored:" + name;
}

function removeName() {
	if (localStorage.getItem("name") === null) return false;
	localStorage.removeItem("name");
	document.getElementById("yourName").value = "Name Removed: "
}

onload = init;