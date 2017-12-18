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
	image: "../ApogeeIntro18/Image/spons/sp1.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp2.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp3.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp4.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp5.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp6.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp7.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp8.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp9.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp10.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp11.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp12.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp13.jpg"
},
{
	image: "../ApogeeIntro18/Image/spons/sp14.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp15.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp16.jpg"
}, 
{
	image: "../ApogeeIntro18/Image/spons/sp17.jpg"
},  
{
	image: "../ApogeeIntro18/Image/spons/sp18.jpg"
}, {
	image: "../ApogeeIntro18/Image/spons/sp19.jpg"
}, {
	image: "../ApogeeIntro18/Image/spons/sp20.jpg"
}, {
	image: "../ApogeeIntro18/Image/spons/sp21.jpg"
},
 {
	image: "../ApogeeIntro18/Image/spons/sp22.jpg"
}];


var string2 = "";
sponsors_info.forEach((el, i)=>{
	string2 += "<div class='s-cont'>\
			<img src='"+ el.image +"'>\
		</div>"
})

document.querySelector('.sponsors').innerHTML = string2;
