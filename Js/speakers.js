var speakers_info = [
{name:"Richard Stallman (Father of the Free Software Movement)", image:"Image/4.jpg"}
,
{name:"APJ Abdul Kalam - Late Former President of India", image:"Image/10.jpg"}

,
{
	name: "Walter Lewin (Famous MIT Physics professor)",
	image: "Image/1.jpg"
},{name:"Simon Taufel : Famous Australian Umpire", image:"Image/6.jpg"}

,






{name:"Kailash Satyarthi- Nobel Peace Prize winner", image:"Image/9.jpg"}

,
{

	name: "David J. Peterson (Famous linguist, creator of Dothraki)",
	image: "Image/3.jpg"
},


{name:"Jairam Ramesh : Indian Politician", image:"Image/5.jpg"}
,


{name:"Radhika Vaz: Comedian", image:"Image/11.jpg"},
{
	name: "Jeff Lieberman (He is popular for hosting the show Time Warp on Discovery Channel)",
	image: "Image/12.jpg"
},

{name:"Salman Khurshid: Indian Politician", image:"Image/7.jpg"}


,
{name:"Manu Joseph", image:"Image/8.jpg"}


,
 {
	name: "Dr. Pawan Agarwal (CEO of the revered Mumbai Dabbawala Association)",
	image: "Image/2.jpg"
},  



]



// 1.richard stallman
// 2.apj abdul kalam
// 3. walter lewin
// 4.simon taufel
// 5. kailash satyarthi
// 6. david j peterson
// 7. salman khurshid
// 8 jairam ramesh
// 9. radhika vaz
// 10. jeff lieberman
// 11. manu joseph


var string = "";
speakers_info.forEach((el, i)=>{
	string += "<div class='s-cont'>\
			<img src='"+ el.image +"'>\
			<p class='s-name'>" + el.name + "</p>\
		</div>"
})

document.querySelector('.speakers').innerHTML = string;

sponsors_info = [{
	image: "./Image/spons/sp1.png",
	name:"Title Sponser"
}, 
{
	image: "./Image/spons/sp2.png",
	name:"Title Sponser - Litfest"

}, 
{
	image: "./Image/spons/sp3.png",
	name:"Gold Sponser"
}, 
{
	image: "./Image/spons/sp4.png",
	name:"Title Sponser - Vootathon"
}, 
{
	image: "./Image/spons/sp5.png",
	name:"Media Partner"
}, 
{
	image: "./Image/spons/sp6.png",
	name:"Gold Partner"
}, 
{
	image: "./Image/spons/sp7.png",
	name:"Driven By Partner - FTGP"
}, 
{
	image: "./Image/spons/sp8.png",
	name:"Education Partner"
}, 
{
	image: "./Image/spons/sp9.png",
	name:"Platinum Sponser - Litfest"
}, 
{
	image: "./Image/spons/sp10.png",
	name:"Platinum Sponser - Litfest"
}, 
{
	image: "./Image/spons/sp11.png",
	name:"Workspace Partner"
}, 
{
	image: "./Image/spons/sp12.png",
	name:"Platinum Sponser"
}, 
{
	image: "./Image/spons/sp13.png",
	name:"Title Sponser - Hackathon"
},
{
	image: "./Image/spons/sp14.png",
	name:"Merchandise Partner"

}, 
{
	image: "./Image/spons/sp15.png",
	name:"Media Partner"

}, 
{
	image: "./Image/spons/sp16.png",
	name:"Youth Partner"
}, 
{
	image: "./Image/spons/sp17.png",
	name:"Official Online Media Partner"
},  
{
	image: "./Image/spons/sp18.png",
	name:"Online Media Partner"
}, 
{
	image: "./Image/spons/sp19.png",
	name:"Online Media Partner"
}, 
{
	image: "./Image/spons/sp20.png",
	name:"Online Media Partner"
}, 
{
	image: "./Image/spons/sp21.png",
	name:"Online Media Partner"
},
{
	image: "./Image/spons/sp22.png",
	name:"Sponser"
}];


var string2 = "";
sponsors_info.forEach((el, i)=>{
	string2 += "<div class='s-cont'>\
			<img src='"+ el.image +"'>\
			<p class='s-name'>" + el.name + "</p>\
		</div>"
})

document.querySelector('.sponsors').innerHTML = string2;
