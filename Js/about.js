var boxes = [
	{
		name: "Reverse Enginering",
		image: "../Image/re.jpg"
	},
	{
		name: "Stock Market Simulation",
		image: "../Image/sms.jpg"
	},
	{
		name: "Apogee Inovation Challenge",
		image: "../Image/aic.jpg"
	},
	{
		name: "Full Throttle Grand Prix",
		image: "../Image/ftgp.jpg"
	},
	{
		name: "Hackathon",
		image: "../Image/hck.jpg"
	},
	{
		name: "International Coding League",
		image: "../Image/icl.jpg"
	},
	{
		name: "Leap",
		image: "../Image/leap.jpg"
	},
	{
		name: "Robots at War",
		image: "../Image/raw.jpg"
	},
]
var openEventMenu = document.querySelector('.eMenu-link');
var aboutPage = document.querySelector('.about-link');
var eMenu = document.querySelector('#event-menu');
var about = document.querySelector('#about');
var boxWrapper = document.querySelector('.box-wrapper');
var crossAbt = document.querySelector('#cross-abt');
var crossEm = document.querySelector('#cross-em');
for(var i = 0;i < boxes.length;i++)
{
	var box = document.createElement("div");
	box.className = "box";
	var img = document.createElement("div");
	img.className = "img";
	img.style.backgroundImage = "url(" + boxes[i].image + ")";
	img.style.backgroundSize = "cover";
	var p = document.createElement("p");
	p.innerHTML = boxes[i].name;
	box.appendChild(img);
	box.appendChild(p);
	boxWrapper.appendChild(box);
}

openEventMenu.addEventListener("click",function(e){
	eMenu.style.display = "flex";

});

aboutPage.addEventListener("click",function(e){
	about.style.display = "flex";
});

crossAbt.addEventListener("click",function(e){
	about.style.display = "none";
});

crossEm.addEventListener("click",function(){
	eMenu.style.display = "none";
})