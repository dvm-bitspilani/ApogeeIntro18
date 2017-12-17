var speakers_info = [{
	name: "Dr. Pawan Agarwal (CEO of the revered Mumbai Dabbawala Association)",
	image: "Image/image1-small-23.png"
}, {
	name: "Jeff Lieberman (He is popular for hosting the show Time Warp on Discovery Channel)",
	image: "Image/image2-24.png"
}, {
	name: "Walter Lewin (Famous MIT Physics professor)",
	image: "Image/image3-small-26.png"
}, {
	name: "David J. Peterson (Famous linguist, creator of Dothraki)",
	image: "Image/image4-small-28.png"
},


{name:"Richard Stallman (Father of the Free Software Movement)", image:"Image/image5-small-30.png"}
,



{name:"Jairam Ramesh : Indian Politician", image:"Image/image6-31.png"}
,



{name:"Simon Taufel : Famous Australian Umpire", image:"Image/image7-32.png"}

,

{name:"Salman Khurshid: Indian Politician", image:"Image/image8-33.png"}


,
{name:"Manu Joseph", image:"Image/image9-small-35.png"}


,
{name:"Kailash Satyarthi- Nobel Peace Prize winner", image:"Image/image10-small-37.png"}

,

{name:"APJ Abdul Kalam - Late Former President of India", image:"Image/image11-small-39.png"}

,
{name:"Radhika Vaz: Comedian", image:"Image/image12-small-41.png"}
]



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
