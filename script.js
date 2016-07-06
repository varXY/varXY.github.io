function sayHello() {
	alert("Hello World");
}

// function init() {
// 	var h1tags = document.getElementsByTagName("h1");
// 	h1tags[0].onclick = changeColor;
// }

function init() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		ctx.fillStyle = "yellow";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "red";
		ctx.fillRect(100, 100, 50, 50);

		ctx.lineWidth = 5;
		ctx.strokeStyle = "blue";
		ctx.strokeRect(100, 100, 100, 100);

		ctx.fillStyle = "navy";
		ctx.beginPath();
		ctx.arc(300, 300, 50, 0, Math.PI*2, true);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(350, 200);
		ctx.lineTo(400, 50);
		ctx.lineTo(450, 200);
		ctx.closePath();
		ctx.fill();

		var linGrad = ctx.createLinearGradient(400, 100, 500, 500);
		linGrad.addColorStop(0, "#8DB600");
		linGrad.addColorStop(0.5, "#9966CC");
		linGrad.addColorStop(1, "#7C0A02");
		ctx.fillStyle = linGrad;
		ctx.fillRect(500, 100, 100, 100);

		var radGrad = ctx.createRadialGradient(275, 250, 5, 290, 260, 100);
		radGrad.addColorStop(0, "red");
		radGrad.addColorStop(1, "white");
		ctx.fillStyle = radGrad
		ctx.arc(250, 250, 50, 0, Math.PI*2, true);
		ctx.fill()

		ctx.font = "bold 40px Arial";
		ctx.fillStyle = "red";
		ctx.fillText("hello", 100, 100);

		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.strokeText("ni hao", 100, 350);

		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 3;
		ctx.shadowColor = "black";
		ctx.fillText("hello", 100, 100);

		ctx.lineWidth = 20;
		ctx.strokeStyle = "purple";
		ctx.beginPath();
		ctx.moveTo(420, 350);
		ctx.lineCap = "round"; // butt square
		ctx.lineTo(800, 400);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(270, 270, 100, 0, 3.14, true);
		ctx.stroke()

		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(300, 150);
		ctx.quadraticCurveTo(350, 250, 450, 250);
		ctx.stroke()

		ctx.strokeStyle = "blue";
		ctx.beginPath();
		ctx.moveTo(450, 250);
		ctx.bezierCurveTo(550, 250, 450, 100, 550, 100);
		ctx.stroke()

		ctx.rotate(Math.PI / 4);
		ctx.scale(0.5, 1);
		ctx.fillRect(400, 50, 100, 100);
	}
}

function changeColor() {
	this.innerHTML = "Click Again";

	var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
	this.style.color = randomColor
}

function toggleImg() {
	var img = document.getElementById("flagImg");
	var isImgVisible = img.style.visibility != "visible";
	img.style.visibility = isImgVisible ? "visible" : "hidden";
}

onload = init;
