 
 var ele = document.getElementById("eye");
setTimeout(function(){
  ele.style.transform = (" scale(0.18) "); },15000)
var ele2 = document.getElementById("rings");
setTimeout(function(){
  ele2.style.transform = (" scale(0.3) "); },15000);

setTimeout(function(){
  var ele1 = document.getElementById("loadingbricks");
  var ele2 = document.getElementById("brickslogo");
  ele1.style.opacity = 0;
  ele2.style.opacity = 1;
},3000);

var loaded = 0;
window.onload = function(){ loaded = 1};

setTimeout(function(){
  if(loaded == 0)
   { var repeatLoader = setInterval(function()
    {
     var animation = $('#bricks').html();
     $('#inbricks').remove();
     $('#bricks').html(animation);
     $('#bricks').fadeIn(1000);
     if(loaded == 1)
      {
       document.getElementById("loader").style.display = "none";
       document.getElementById("mainpage").style.display = "block";
       $('#mainpage').fadeIn(250);
       console.log("AAA")
       window.renderHome();
       dismissLoader();
       clearInterval(repeatLoader);
      }
    }, 11000)
   }
   else
   {
    setTimeout(function(){
        // $('#preloader').fadeOut(100);
        //  document.getElementById("preloader").style.display = "none";
        // document.getElementById("mainpage").style.display = "block";
        // $('#mainpage').fadeIn(250);
        $('#loader').hide(1000);
        $('#mainpage').show(700);
        dismissLoader();
        console.log("BBB");
        window.renderHome();
      },9800)
   }
},10000)

var debug = ()=>{
  dismissLoader();
        // window.renderHome();
  // showForm();
  // renderEvent('SMS')();
  // renderPastSpeakers();
}

// debug()

function dismissLoader(){
  $('#loader').hide(1000);
  $('#mainpage').show(700);
  window.renderHome();
  setTimeout(function(){
            document.getElementById("landingpage").style.background = "#FFF";

          },1250);
           document.getElementById("landingpage").style.height = "100vh";
      document.getElementById("landingpage").style.marginTop = "0";
      document.getElementById("landingrollcover").style.opacity = "1";
}