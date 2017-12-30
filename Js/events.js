/*opens ca*/
function openca()
{
	window.open("https://www.bits-apogee.org/ca/","_blank");
}

var renderCatMenu = function(category){
	console.log(category, Events[category]);
	return function(){
		var box_wrapper_innerHTML = "";

		for(eventCode in Events[category]){
			box_wrapper_innerHTML += "<div class='box "+ eventCode.toLowerCase()+"' data-category='"+category+"' data-event='"+ eventCode+"'><div class='img' style='background-image: url(\""+ templates.event.image(category, eventCode) +"\")'></div><p>"+ Events[category][eventCode].head+"</p></div>";
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
		var ext = '.svg';
		if(category == "ESUMMIT"){
			ext = ".png";
		}
		category_wrapper_html += '<div class="category" data="'+category+'"><img src="Image/'+ category.toLowerCase() + ext + '" alt="'+ category +'"></div>'
	}

	cat_wrapper.innerHTML = category_wrapper_html;
	var cats = document.querySelectorAll('.category');

	Array.prototype.forEach.call(cats,(el, i)=>{

		el.addEventListener('click', renderCatMenu(el.getAttribute('data')))
	});

})();


function change(className, data_wrapper, footer, color, imageURL, footerCallback)
{

	return function(){
		var footerEle = document.body.querySelector("#footer");
		
		document.body.className = className;
		document.body.querySelector("#data_wrapper").innerHTML = data_wrapper
		footerEle.innerHTML = footer;
		document.body.querySelector("#color").style.color = color;
		document.body.querySelector("#footer").style.backgroundColor = color;
		
		setTimeout(()=>{document.body.querySelector('.image').style.backgroundImage = "url(" + imageURL + ")";} , 480);
		if(footerCallback){
			footerEle.addEventListener('click', footerCallback);
		}else{
			var prevFunc = footerEle.onclick;
			if(prevFunc)
				footerEle.removeEventListener('click', prevFunc);
		}
	}
}




window.renderEvent = function(category, eventCode){
	if(eventCode == null){
		eventCode = "RE";
	}
	var __render__ = change(
		"event "+ category+" "+eventCode,
		templates.event.data_wrapper(category, eventCode),
		templates.event.footer(category, eventCode),
		Events[category][eventCode].color,
		templates.event.image(category, eventCode),
		(
			Events[category][eventCode]["moreInfo"]?
			(
				function(){
					var ev = Events[category][eventCode];
					var screen = document.querySelector("#more-info");
					screen.querySelector('.about-head').innerText = Events[category][eventCode]["head"];
					screen.querySelector('.more-info-content').innerHTML = Events[category][eventCode]["moreInfo"];
					renderMoreInfo();
				}
				)
			:null
			));
	return function(){
		__render__();
		// setTimeout(animateInfo, 1000);
	};
}
window.renderHome = change("home", templates.home.data_wrapper, templates.home.footer, "#04FFE5", "Image/mainbg.jpeg", null);


function animateInfo(){
	console.log("animate");
	var container = document.querySelector('.__container__');
	var header = container.querySelector('header');
	var section = container.querySelector('section');
	animate(header);
	animate(section);
}

function animate(ele){
	ele.className += " animate";
	setTimeout(function(){
		console.log("remove animate");
		ele.className = ele.className.replace(" animate", "");
		// console.log("remove animate", );
	}, 1000)
}