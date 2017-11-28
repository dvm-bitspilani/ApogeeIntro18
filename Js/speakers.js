var speakers_info = [{
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}, {
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}, {
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}, {
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}]

var string = "";
speakers_info.forEach((el, i)=>{
	string += "<div class='s-cont'>\
			<img src='"+ el.image +"'>\
			<p class='s-name'>" + el.name + "</p>\
		</div>"
})

document.querySelector('.speakers').innerHTML = string;

sponsors_info = [{
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}, {
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}, {
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}, {
	name: "Navjot",
	image: "../ApogeeIntro18/Image/re.jpeg"
}];


var string2 = "";
sponsors_info.forEach((el, i)=>{
	string2 += "<div class='s-cont'>\
			<img src='"+ el.image +"'>\
			<p class='s-name'>" + el.name + "</p>\
		</div>"
})

document.querySelector('.sponsors').innerHTML = string2;
