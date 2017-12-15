 
 var ele = document.getElementById("combi");
    setTimeout(function(){
      ele.style.transform = (" scale(0.18) "); },15000)
    var ele2 = document.getElementById("ao");
    setTimeout(function(){
      ele2.style.transform = (" scale(0.3) "); },15000);

   setTimeout(function(){
      var ele1 = document.getElementById("loading");
      var ele2 = document.getElementById("logo");
      ele1.style.opacity = 0;
      ele2.style.opacity = 1;
    },3000);

var loaded = 0;
window.onload = function() { loaded = 1; 
                          
                           };
  setTimeout(function(){
    if(loaded == 0)
       {var repeatLoader = setInterval(function()
        {
       var animation = $('#bricks').html();
       $('#inbricks').remove();
       $('#bricks').html(animation);
       $('#bricks').fadeIn(1000);
       if(loaded == 1){
         document.getElementById("preloader").style.display = "none";
        document.getElementById("mainpage").style.display = "block";
        $('#mainpage').fadeIn(250);
                clearInterval(repeatLoader);
       }

     }, 11000)}
     else
     {
      setTimeout(function(){
        // $('#preloader').fadeOut(100);
        //  document.getElementById("preloader").style.display = "none";
        // document.getElementById("mainpage").style.display = "block";
        // $('#mainpage').fadeIn(250);
        $('#preloader').hide(1000);
        $('#mainpage').show(700);
      },9800)}
      
  },10000)