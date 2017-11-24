var Events =
{
	SMS :
	{	color : "#03B3E5",
		head : "Stock Market Simulation",
		info : "laurenipsum",
		image : "hogakoi"
	},
	RE :
	{	color : "#F6A211",
		head : "Reverse Engineering",
		info : "laurenipsum",
		image : "hogakoi"
	},
	AIC :
	{	color : "#F33562",
		head : "Apogee Innovation Challenge",
		info : "laurenipsum",
		image : "hogakoi"
	},
	FTGP :
	{	color : "#52B5A0",
		head : "Full Throttle Grand Prix",
		info : "laurenipsum",
		image : "hogakoi"
	},
	HC :
	{	color : "#37F275",
		head : "Hackathon",
		info : "laurenipsum",
		image : "hogakoi"
	},
	ICL :
	{	color : "#357BF3",
		head : "International Coding League",
		info : "laurenipsum",
		image : "hogakoi"
	},
	RAW :
	{	color : "#F6A211",
		head : "Robots At War",
		info : "laurenipsum laurenipsum laurenipsum laurenipsum laurenipsum laurenipsum laurenipsum laurenipsumlaurenipsum laurenipsum laurenipsum laurenipsum laurenipsum laurenipsum",
		image : "hogakoi"
	},
	LP :
	{	color : "#F6A211",
		head : "Leap",
		info : "laurenipsum",
		image : "hogakoi"
	}
}
var info = document.querySelector(".infodata");
var content = document.querySelector(".infocontent")
var head = document.querySelector(".heading");
var data = document.querySelector(".data");
var slink = document.querySelector(".social_link");
var linkage = document.querySelector(".linkage");
var image = document.querySelector(".image");
var _url = document.location.pathname;
var dir = _url.substring(0,_url.lastIndexOf('/'));
function change()
{	info.style.display = "flex";
	image.style.backgroundImage = "url("+dir+"/Image/hackathon.jpg"+")";
	slink.style.display = "none";
	data.style.display = "none";
	content.innerHTML = Events.RAW.info;
	head.style.display = "flex";
	head.innerHTML = Events.LP.head;
	linkage.style.display ="flex";
}
