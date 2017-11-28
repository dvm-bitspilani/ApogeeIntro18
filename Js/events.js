var random_text = 'Non risus etiam integer litora eros scelerisque augue aenean ante augue velit ad\
Elit quam blandit porttitor pretium egestas potenti fringilla tristique iaculis et\
Vehicula commodo donec tristique et pellentesque at feugiat\
Vivamus dolor magna purus diam\
Tempus est hac conubia semper sagittis posuere dictumst ligula\
Etiam mollis pellentesque mi elementum integer commodo ipsum ut habitant varius\
Sociosqu vel iaculis torquent ultricies molestie aliquam porttitor cursus dictumst velit\
Et nostra suscipit mollis aliquam congue dolor dapibus fames risus viverra lobortis integer'

var Events =
{
	SMS :
	{	color : "#03B3E5",
		head : "Stock Market Simulation",
		info : random_text,
		image: "Image/sms.jpeg"
	},
	RE :
	{	color : "#F6A211",
		head : "Reverse Engineering",
		info : random_text,
		image: "Image/re.jpeg"
	},
	AIC :
	{	color : "#F33562",
		head : "Apogee Innovation Challenge",
		info : random_text,
		image: "Image/aic.jpg"
	},
	FTGP :
	{	color : "#52B5A0",
		head : "Full Throttle Grand Prix",
		info : random_text,
		image: "Image/ftgp.jpeg"
	},
	HACK :
	{	color : "#37F275",
		head : "Hackathon",
		info : random_text,
		image: "Image/hack.jpg"
	},
	ICL :
	{	color : "#357BF3",
		head : "International Coding League",
		info : random_text,
		image: "Image/icl.jpeg"
	},
	RAW :
	{	color : "#F6A211",
		head : "Robots At War",
		info : random_text,
		image: "Image/re.jpeg"
	},
	LEAP :
	{	color : "#F6A211",
		head : "Leap",
		info : random_text,
		image: "Image/leap.jpeg"
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
function change(className, data_wrapper, footer, color, imageURL)
{	
	
	return function(){
		document.body.className = className;
		document.body.querySelector("#data_wrapper").innerHTML = data_wrapper
		document.body.querySelector("#footer").innerHTML = footer;
		document.body.querySelector("#color").style.color = color;
		document.body.querySelector("#footer").style.backgroundColor = color;
		setTimeout(()=>{document.body.querySelector('.image').style.backgroundImage = "url(" + imageURL + ")";} , 480);
	}
}


var templates = {
	"home":{
		data_wrapper: '<div class="data">\
			<p id="head">cybernetic<br> vision</p>\
			<p id="date">78-67 february</p>\
			<p id="info">annual technical fest\
			<br>\
			 of bits pilani</p>\
		</div>',
		footer: '<ul>\
			<a href="#"><li><img src="./Image/fb.png"></li></a>\
			<a href="#"><li><img src="./Image/twitter.png"></li></a>\
			<a href="#"><li><img src="./Image/insta.png"></li></a>\
		</ul>'
	},
	"event" :{
		data_wrapper: function(eventCode){
			console.log(eventCode);
			return '<div class="letter"></div>\
			<div class="__container__">\
				<header><h1><b>' + Events[eventCode].head + '</b></h1></header>\
				<section>' + Events[eventCode].info + '</section>\
			</div>'
		},
		footer: '<h3>PROBLEM STATEMENTS</h3>'
	}
}

window.renderEvent = function(eventCode){
	if(eventCode == null){
		eventCode = "RE";
	}
	return change(
		"event "+ eventCode,
		templates.event.data_wrapper(eventCode),
		templates.event.footer, 
		Events[eventCode].color,
		Events[eventCode].image
		);
}
window.renderHome = change("home", templates.home.data_wrapper, templates.home.footer, "#04FFE5", "Image/mainbg.jpeg");
//pallav

