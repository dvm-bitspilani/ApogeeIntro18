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
	image: "../ApogeeIntro18/Image/spons/sp1.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp2.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp3.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp4.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp5.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp6.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp7.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp8.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp9.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp10.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp11.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp12.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp13.jpg"
},
{
	image: "../ApogeeIntro18/Image/spons/sp14.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp15.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp16.png"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp17.jpg"
},  
{
	image: "../ApogeeIntro18/Image/spons/sp18.jpg"
}, {
	image: "../ApogeeIntro18/Image/spons/sp19.png"
}, {
	image: "../ApogeeIntro18/Image/spons/sp20.png"
}, {
	image: "../ApogeeIntro18/Image/spons/sp21.jpg"
},
 {
	image: "../ApogeeIntro18/Image/spons/sp22.png"
}];


var string2 = "";
sponsors_info.forEach((el, i)=>{
	string2 += "<div class='s-cont'>\
			<img src='"+ el.image +"'>\
		</div>"
})

document.querySelector('.sponsors').innerHTML = string2;
