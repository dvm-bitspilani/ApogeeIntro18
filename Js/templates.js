var templates = {
	"home":{
		data_wrapper: '<div class="data">\
		<p id="head">cybernetic<br> vision</p>\
		<p id="date">21-25 february</p>\
		<p id="info">annual technical fest\
		<br>\
		of bits pilani</p>\
		</div>',
		footer: '<ul>\
		<a href="https://www.facebook.com/bitsapogee/" target="_blank"><li><img src="./Image/fb.png"></li></a>\
		<a href="https://twitter.com/bitsapogee?lang=en" target="_blank"><li><img src="./Image/twitter.png"></li></a>\
		<a href="https://www.instagram.com/bitsapogee/" target="_blank"><li><img src="./Image/insta.png"></li></a>\
		<a href="https://www.youtube.com/watch?v=wVBO2qEUpck" target="_blank"><li><img src="./Image/ytb.png"></li></a>\
		</ul>'
	},
	"event" :{
		data_wrapper: function(category, eventCode){
			console.log(category, eventCode);
			return '<div class="letter"></div>\
			<div class="__container__">\
			<header><h1><b>' + Events[category][eventCode].head + '</b></h1></header>\
			<section >' + Events[category][eventCode].info + '</section>\
			</div>'
		},
		footer: function(category, eventCode){
			// return (Events[category][eventCode]["moreInfo"]?'<h3>MORE INFO</h3>':'<h3><a style="text-decoration:none;color:#fff" href="./pdfs/Rules Booklet Updated complete.pdf" download="Rules Booklet.pdf">DOWNLOAD RULES BOOKLET</a></h3>');
			return ('<h3><a style="text-decoration:none;color:#fff" href="./pdfs/Rules Booklet Updated complete.pdf" download="Rules Booklet.pdf">DOWNLOAD RULES BOOKLET</a></h3>');
		},
		image: function(category, eventCode){
			return "Image/"+ category.toLowerCase() + "/" + eventCode.toLowerCase() + ".jpg" ;
		}
	}
}