
var openEventMenu = document.querySelectorAll('.eMenu-link');
var aboutPage = document.querySelectorAll('.about-link');
var eMenu = document.querySelector('#event-menu');
var cMenu = document.querySelector('#category-menu');
var about = document.querySelector('#about');
var boxWrapper = document.querySelector('.box-wrapper');
var crossAbt = document.querySelector('#cross-abt');
var crossEm = document.querySelector('#cross-em');
var crossButtons  = document.querySelectorAll('.cross-btn');
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');

Array.prototype.forEach.call(aboutPage,(el)=>{
	el.addEventListener("click",renderAbout);
});
// var opened = false;
Array.prototype.forEach.call(openEventMenu, (el)=>{
	el.addEventListener("click",function(e){
		fadeInUp(cMenu, "flex");
	});
})

Array.prototype.forEach.call(crossButtons, (el)=>{
	console.log(el);
	if((el.getAttribute('data') && el.getAttribute('data')!="nope")|| !(el.getAttribute('data'))){

		el.addEventListener("click", ()=>{
			fadeOutDown(el.parentNode);
			closeNav()
		})
	}
})


function fadeOutDown(e, callback=null){
	// console.log(e)
	e.className += " fadeOutDown";
	setTimeout(()=>{
		e.style.display = "none";
		e.style.top = '0px';
		e.className = e.className.replace(" fadeOutDown", '');
		if(callback)
			callback();
	},480);
}


function fadeInUp(e,display, callback=null){
	// console.log(e)
	e.style.top = '100%';
	e.style.display = display;
	e.className += " fadeInUp";
	setTimeout(()=>{
		e.style.top = '0px';
		e.className = e.className.replace(" fadeInUp", '');
		if(callback)
			callback();
	},480);
}

function renderPastSpeakers(){
	fadeInUp(document.body.querySelector('#past-speakers'), "flex");
}

function renderContacts(){
	fadeInUp(document.body.querySelector('#contacts'), "flex");
}

function renderSponsors(){
	fadeInUp(document.body.querySelector('#sponsors'), "flex");
}

function renderAbout(){
	p1.innerHTML ="<b>Birla Institute of Technology and Science, Pilani</b> is one of the premier and most esteemed colleges in India. It is recognized as the best private engineering college of the country and is home to some of the brightest minds of the nation. Over the years, BITS Pilani has maintained a reputation of imparting excellence in education along with co-curricular and extracurricular, a combination of which is the key to achieving success in life and making difference to the world.<br><em>APOGEE</em> is the <em>annual, international technical festival of BITS Pilani</em>. This will be the <em>36th edition</em> of this technological symposium and shall be hosted in BITS Pilani from 21st-25th February, 2018.";
	p2.innerHTML = "Cybernetics is a trans-disciplinary approach for exploring regulatory systems - their structures, constraints and possibilities. In other words, it is the scientific study of how humans, animals and machines control and communicate with each other. Its focus is on the processing of information and reaction to the information by a system and the changes that can be made to better accomplish these tasks. The relevance of Cybernetics extends across mechanical, physical, biological, cognitive and social systems.";
	fadeInUp(document.body.querySelector('#about'), "flex");
}

function showForm(){
	fadeInUp(document.body.querySelector('#pre_register'), "flex");
}

function renderMoreInfo(){
	fadeInUp(document.body.querySelector('#more-info'), "flex");
}

function renderEMenu(){
	console.log('render Emenu');
	fadeInUp(eMenu, "flex");
}
function renderpep(){
	fadeInUp(document.body.querySelector('#pep'), "block");
}


