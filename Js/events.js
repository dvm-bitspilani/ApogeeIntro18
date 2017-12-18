/*opens ca*/
function openca()
{
	window.open("https://www.bits-apogee.org/ca/","_blank");
}
var random_text = 'Non risus etiam integer litora eros scelerisque augue aenean ante augue velit ad\
Elit quam blandit porttitor pretium egestas potenti fringilla tristique iaculis et\
Vehicula commodo donec tristique et pellentesque at feugiat\
Vivamus dolor magna purus diam\
Tempus est hac conubia semper sagittis posuere dictumst ligula\
Etiam mollis pellentesque mi elementum integer commodo ipsum ut habitant varius\
Sociosqu vel iaculis torquent ultricies molestie aliquam porttitor cursus dictumst velit\
Et nostra suscipit mollis aliquam congue dolor dapibus fames risus viverra lobortis integer'




// var Events =
// {
// 	SMS :
// 	{	color : "#03B3E5",
// 		head : "Stock Market Simulation",
// 		info : random_text,
// 		image: "Image/sms.jpeg"
// 	},
// 	RE :
// 	{	color : "#F6A211",
// 		head : "Reverse Engineering",
// 		info : random_text,
// 		image: "Image/re.jpeg"
// 	},
// 	AIC :
// 	{	color : "#F33562",
// 		head : "Apogee Innovation Challenge",
// 		info : "APOGEE Innovation Challenge, an exceptional technical symposium, aims at quenching your thirst for hands-on experience in real life problems plaguing the industrial world. Organized in collaboration with various multinational companies, this event presents before you existing challenges faced by these companies who seek their solutions from you. <br>Exciting internship offers and cash prizes await the winners. Participation certificate shall be given to all members of each team which present solutions during APOGEE ‘18. Needless to say, you can brag about cracking a professional challenge while still being in college.<br>These problems, which happen to be discipline specific (one need not belong to that discipline), are to be solved by participants in teams of 2-4 in a month. After scrutiny by company officials, top 5 teams will be presenting their final solutions during APOGEE ‘17. ",
// 		image: "Image/aic.jpg"
// 	},
// 	FTGP :
// 	{	color : "#52B5A0",
// 		head : "Full Throttle Grand Prix",
// 		info : "Sports Cars are one of the most ultimate man-made machines and their race is full of adventures and a must watch event. On the course of F1 racing BITS-Pilani is conducting Remote Controlled racing event “The Full Throttle Grand Prix”. This competition is to show your knowledge about engineering behind remote controlled cars and feel the effect of ultimate driving experience. The event requires racing of your self-built RC cars on a race track. Although it may look simple to you but you will face cut-throat competition, and finally it is the quality of the car and driver ability which will decide the winner<br>Build a Remote Controlled IC engine powered car to traverse a race track in the minimum possible time. The time trial track may be composed of several turns with increasing difficulty levels. The teams with the top best time to lap this track qualify for racing. Final round will be a race.",
// 		image: "Image/ftgp.jpeg"
// 	},
// 	HACK :
// 	{	color : "#37F275",
// 		head : "Hackathon",
// 		info : "Have you ever dreamt of exploring the world of Artificial Intelligence by solving a real life problem? If yes, then your ticket to turning this enthralling thought into reality is right in front of you. BITS-Pilani presents the premier machine learning hackathon this APOGEE 2018.",
// 		image: "Image/hack.jpg"
// 	},
// 	ICL :
// 	{	color : "#357BF3",
// 		head : "International Coding League",
// 		info : "Talk is Cheap. Show me the code- Linus Torvalds.<br>Do you think you have mastered Competitive coding, the greatest mind sport? Do you feel the urge to solve Mind blowing problems and play the Game of Codes? Here’s your stage to step on and prove your coding skills – A challenging stage, a nail biting one! BITSACM presents ICL - International Coding League: a competitive programming contest based on the ACM ICPC this Apogee 2018. In February some of the best minds in the country are to gather to compete for the crown.",
// 		image: "Image/icl.jpeg"
// 	},
// 	RAW :
// 	{	color : "#F6A211",
// 		head : "Robots At War",
// 		info : "Design a remote controlled robot to combat with the opponent's bot. The arena will be a rectangle measuring 24ft x 24ft. However, the fight zone will be 20ft x 20ft, pushing the opponent bot out of this fight zone will result in victory. The arena might be on hard and uneven ground and will be enclosed by a 5ft high wire meshes all around.",
// 		image: "Image/re.jpeg"
// 	},
// 	LEAP :
// 	{	color : "#F6A211",
// 		head : "Leap",
// 		info : random_text,
// 		image: "Image/leap.jpeg"
// 	}
// }


var Events = {
	"CIVIL": {

	},
	"CODING":{
		HACK :
		{	color : "#37F275",
			head : "Hackathon",
			info : "Have you ever dreamt of exploring the world of Artificial Intelligence by solving a real life problem? If yes, then your ticket to turning this enthralling thought into reality is right in front of you. BITS-Pilani presents the premier machine learning hackathon this APOGEE 2018.",
			image: "Image/hack.jpg"
		},
		ICL :
		{	color : "#357BF3",
			head : "International Coding League",
			info : "Talk is Cheap. Show me the code- Linus Torvalds.<br>Do you think you have mastered Competitive coding, the greatest mind sport? Do you feel the urge to solve Mind blowing problems and play the Game of Codes? Here’s your stage to step on and prove your coding skills – A challenging stage, a nail biting one! BITSACM presents ICL - International Coding League: a competitive programming contest based on the ACM ICPC this Apogee 2018. In February some of the best minds in the country are to gather to compete for the crown.",
			image: "Image/icl.jpeg"
		},
	},
	"MECHATRONICS":{},
	"MISCELLANEOUS":{},
	"QUIZZING":{},
	"ROBOTICS":{},
	"SCIENCES":{},
	"SOCIAL":{}
};

var renderCatMenu = function(category){
	console.log(category, Events[category]);
	return function(){
		var box_wrapper_innerHTML = "";

		for(eventCode in Events[category]){
			box_wrapper_innerHTML += "<div class='box "+ eventCode.toLowerCase()+"' data-category='"+category+"' data-event='"+ eventCode+"'><div class='img'></div><p>"+ Events[category][eventCode].head+"</p></div>";
		}
		document.querySelector('.box-wrapper').innerHTML = box_wrapper_innerHTML;
		console.log(box_wrapper_innerHTML);

		Array.prototype.forEach.call(document.querySelectorAll('.box'), (el)=>{
			el.addEventListener('click',(e)=>{
				console.log(el)
				renderEvent(el.getAttribute('data-category'), el.getAttribute('data-event'))();
				closeNav();
				document.querySelector('#category-menu').querySelector('.cross-btn').click();
				document.querySelector('#event-menu').querySelector('.cross-btn').click();
			})			
		});
		renderEMenu();
	};	
};

(function __init_categories__(){
	var category_wrapper_html = "";
	var cat_wrapper = document.querySelector('.category-wrapper');
	for( category in Events){
		category_wrapper_html += '<div class="category" data="'+category+'">' + category + '</div>'
	}	
	
	cat_wrapper.innerHTML = category_wrapper_html;
	var cats = document.querySelectorAll('.category');
	
	Array.prototype.forEach.call(cats,(el, i)=>{

		el.addEventListener('click', renderCatMenu(el.getAttribute('data')))
	});

})();




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
			<p id="date">22-25 february</p>\
			<p id="info">annual technical fest\
			<br>\
			 of bits pilani</p>\
		</div>',
		footer: '<ul>\
			<a href="https://www.facebook.com/bitsapogee/" target="_blank"><li><img src="./Image/fb.png"></li></a>\
			<a href="https://twitter.com/bitsapogee?lang=en" target="_blank"><li><img src="./Image/twitter.png"></li></a>\
			<a href="https://www.instagram.com/bitsapogee/" target="_blank"><li><img src="./Image/insta.png"></li></a>\
		</ul>'
	},
	"event" :{
		data_wrapper: function(category, eventCode){
			console.log(category, eventCode);
			return '<div class="letter"></div>\
			<div class="__container__">\
				<header><h1><b>' + Events[category][eventCode].head + '</b></h1></header>\
				<section>' + Events[category][eventCode].info + '</section>\
			</div>'
		},
		footer: '<h3>PROBLEM STATEMENTS</h3>'
	}
}

window.renderEvent = function(category, eventCode){
	if(eventCode == null){
		eventCode = "RE";
	}
	return change(
		"event "+ category+" "+eventCode,
		templates.event.data_wrapper(category, eventCode),
		templates.event.footer, 
		Events[category][eventCode].color,
		Events[category][eventCode].image
		);
}
window.renderHome = change("home", templates.home.data_wrapper, templates.home.footer, "#04FFE5", "Image/mainbg.jpeg");


