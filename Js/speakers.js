var string = "";
speakers_info.forEach((el, i)=>{
	string += "<div class='s-cont'>\
			<img src='"+ el.image +"'>\
			<p class='s-name'>" + el.name + "</p>\
		</div>"
})

document.querySelector('.speakers').innerHTML = string;


var string2 = "";
sponsors_info.forEach((el, i)=>{
	string2 += "<div class='spons-cont'>\
			<img src='"+ el.image +"'>\
			<p class='spons-name'>" + el.name + "</p>\
		</div>"
})

document.querySelector('.sponsors').innerHTML = string2;





var string3 = "";
contacts_info.forEach((el, i)=>{
	string3 += "<div class='con-cont'>\
			<img src='https://bits-apogee.org/"+ el.back_img +"'>\
			<p class='con-dept'><b>" + el.dept + "</b></p>\
			<p class='con-name'>" + el.name + "</p>\
			<p class='con-phone'>" + el.phone + "</p>\
			<p class='con-email'>" + el.email + "</p>\
		</div>"
})

document.querySelector('.contacts').innerHTML = string3;
