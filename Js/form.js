
// JS for Desktops and large screens
if(window.innerWidth >= 992){

  // console.log($("#back-btn"))
  // console.log("big js");



  /*Animating the form*/
  var scrollCheck = 0;
  var index = 0;
  var topPadding = -100;
  var fields,wrapper;
  

  // To make a field active
  function changeActiveField(index){
    $('.active').removeClass('active');
    var activeField = $('.field:eq(' + index + ')')
    // console.log(activeField, "change")
    activeField.addClass('active');
    activeField.find('input').focus();
    // console.log("changeActiveField")
  }


  // To scroll to a particular field
  function scrollToActiveField(field){
    // console.log("called")
    // console.log($(field),$(field).index() )
    var newIndex = $(field).index() - 1;
    // console.log(newIndex)
    if(newIndex != index){
      index = newIndex;
      var offset = $(field).offset().top;
      var screen  = $('html,body');
      
      screen.animate({scrollTop: $(field).offset().top + $(field).height()/2 - $(window).height()/2}, 300)
      // console.log("scrollToActiveField")
      scrollCheck = 0;
      
    }
  }

  $(document).ready(function(){
    // console.log('document ready')
    $("#back-btn").css('display', "none");
    
    fields = $('.field');
    

    wrapper = $('.wrapper');

    $('#event-select-btn').click(function(){
      var val = $('#event-select').val();
      var text = $('#event-select').text()
      $box = $('#events-box');
      $div = $("<div>",{value:val}).addClass('event')
      $p = $("<p>").text(text);
      $innerDiv = $("<div>",{id:"minus-btn"});
      $img = $("<img>",{src:"minus.svg"});
      $p.appendTo($div);
      $img.appendTo($innerDiv);
      $innerDiv.appendTo($div);
      $div.appendTo($('.events-box'));
      $innerDiv.click(function(e){
        // console.log("taneja madar chod")
        $(this).parent().remove();
      })
    });
    


      //Toggle on scrolling

    document.getElementById('pre_register').onscroll = ((e)=>{
      // console.log(e);
       
      
      if(scrollCheck == 0)
      {
        var scroll = $('#pre_register').scrollTop();
        var halfHeight = $('#pre_register').height()/2;
        $('#line').css('top', scroll + halfHeight);

        // console.log(halfHeight, scroll);
        for(var i = 0;i < fields.length;i++)
        {
          // console.log((scroll + halfHeight > $(fields[i]).offset().top ),  (scroll + halfHeight < $(fields[i]).offset().top + $(fields[i]).height()))
          if((scroll + halfHeight > fields[i].offsetTop ) && (scroll + halfHeight < fields[i].offsetTop + fields[i].offsetHeight))
          {
            // $('#line2').css('top', fields[i].offsetTop);
            // $('#line3').css('top', fields[i].offsetHeight + fields[i].offsetTop);
            index = i;
            changeActiveField(index);
          }

        }
      }
    })  
    // console.log(window)
    


    // var k = setInterval(()=>{
    //   var top = $('.active').offset().top ;
    //   var bottom = $('.active').offset().top + $('.active').height();

    //   $('#lineActive1').css('top', top);
    //   $('#lineActive2').css('top', bottom);
    // },200)
    

    // document.querySelectorAll('.field').forEach((e)=>{
    //   console.log(e.offsetTop, e.offsetHeight + e.offsetTop);
    // })

    // To move to a particular field on focusing on an input
    var inputs = $('.field input');

    inputs.focus(function(){
        // console.log("focuscallback")
        // console.log("inputs",this)
        scrollToActiveField($(this).parent().parent());
      });

    var target_labels = $('.field input[type=radio] + label');
    target_labels.focus(function(){
        // console.log("focuscallback")
        // console.log("labels ...",$(this).parent().parent())
        scrollToActiveField($(this).parent().parent());
      });

    var select = $('.field select');
    select.focus(function(){
        // console.log("focuscallback")
        // console.log("select ...",$(this).parent().parent())
        scrollToActiveField($(this).parent().parent());
      })

      // To move to next field on keydown or Enter
      var temp;
      inputs.keydown(function(event) {
        if ((event.keyCode === 13||event.keyCode === 40) && this.validity.valid) {
         scrollCheck = 1;
         console.log("keydown")
         var newIndex = inputs.index(this) + 1;
         console.log(inputs.length)
         if (newIndex < inputs.length) {
          temp = inputs.eq(newIndex);
          console.log(temp)
          temp.focus();
        }
      }
      if(event.keyCode === 38){
        scrollCheck = 1;
        newIndex = inputs.index(this) - 1;
        if(newIndex >= 0){
          temp = inputs.eq(newIndex);
          temp.focus();
        }
      }
    });

      $('.field').click(function(){
        scrollCheck = 1;
        scrollToActiveField(this);
        console.log("click")
      })
      // To make the first field active
      changeActiveField(index);
      $('#submit-button').click(function(){
        submitFormData(changeActiveField);
      })
    })
}
// JS for small and mobile screens
if($(window).width() < 992){
  $(document).ready(function(){
// console.log("small js");
var index = 0;
var fields = $('.field');

$('#event-select-btn').click(function(){
  var val = $('#event-select').val();
  var text = $('#event-select').val();
  $box = $('#events-box');
  $div = $("<div>").addClass('event')
  $p = $("<p>").text(text);
  $innerDiv = $("<div>",{id:"minus-btn"});
  $img = $("<img>",{src:"minus.svg"});
  $p.appendTo($div);
  $img.appendTo($innerDiv);
  $innerDiv.appendTo($div);
  $div.appendTo($('.events-box'));
  $innerDiv.click(function(e){
    console.log("taneja madar chod")
    $(this).parent().remove();
  })
})
function changeActiveField(index){

  $('.active').css({"display":"none"});
  $('.active').removeClass('active');
  $(fields[index]).fadeIn(400);
  console.log($(fields[index]))
  $(fields[index]).addClass('active');
}
fields = $('.field');
fields.css("display","none");
$('#next-btn').click(function(){
  index++;
  if(index == fields.length - 1){
    $('#next-btn').css({"display":"none"});
    $('#submit-btn').css({"display":"block"});
  }
  changeActiveField(index);
})

var input = $('.field input');

input.keydown(function(event){
  if(event.keyCode === 13) {
    index++;
    if(index == fields.length - 1){
      $('#next-btn').css({"display":"none"});
      $('#submit-btn').css({"display":"block"});
    }
    changeActiveField(index);
  }
})
$('#back-btn').click(function(){
  if(index > 0){
    if(index == fields.length - 1){
      $('#next-btn').css({"display":"block"});
      $('#submit-btn').css({"display":"none"});
    }
    index--;
    changeActiveField(index);
  }
})

changeActiveField(index);

$('#submit-btn').click(function(){
  submitFormData(changeActiveField);
})
})
}
var disabled = false;

function submitFormData(func){
  if(!disabled){
    // console.log("form submitted!")
    var data = {}
    var inputs = $('input');
    var baseUrl = 'https://bits-apogee.org/2018/registerations/introreg/';
    // $.each(inputs,function(index,key){
    //   data[key.name] = key.value;
    //   console.log(key)
    // })
    var flag = 0;
    $('#register-form').serializeArray().forEach(function(element, index) {
      console.log(element.value == "", element)
      // if(element.value == "" && !flag){
      //   flag = 1;

      //   showMsg('please fill the form', 3000);

      //   return func(index);
      // }
      if(element.name != college)
        data[element.name] = element.value;
      else
        ;

    }, this);
    if(flag)return;
    var n = $('input[name=phone]')[0].value;
    // console.log(n.match('\/d+\'));
    var r = new RegExp("^\d{10}$");
    // console.log("phone", n, (n.match(/^\d{10}$/)));
    var b = (n.match(/^\d{10}$/));
    if(b && b.length == 1){
      // console.log(grecaptcha.getResponse())
      disabled = true;
      $('#submit-button').css('background', '#666');
      console.log(data);
      $.ajax({
        method:"POST",
        url:baseUrl,
        data:data,
      }).done(function(response){
        $('#submit-button').css('background', '#fc0c84');
        disabled = false;
        console.log(response);
        showMsg(response.message, 3000);
        if(response.status == 0){
          func(8);

        }
      });
    }
    else{
      showMsg("please enter a valid phone number", 3000);
      func(3)
    }
  }
}

function showMsg(text, time){
  $('#resp_msg p').text(text);

  $('#resp_msg').fadeIn();
  setTimeout(function(){
    $('#resp_msg').fadeOut();
  }, time);
}

// $(document).ready(function() {
//   $('#event-select').select2({
//     'placeholder': 'Search event name',
//     width: "resolve",
//   });
//    $('#college').select2({
//     'placeholder': 'Search college name',
//     width: "resolve",
//   });
// });

// console.clear();


function loadCollegeOptions(){
  
  getList().then(setOptions).then(initSelect2);
}


function getList(){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://bits-apogee.org/2018/api/colleges');  
    xhr.send(null);
    xhr.addEventListener('load', (e)=>{
      if(e.currentTarget && e.currentTarget.readyState == 4){
        resolve(JSON.parse(e.currentTarget.response).colleges);
      }else{
        reject(e);
      }
    })
    xhr.addEventListener('error', reject);
  });
}

function setOptions(list){
  var options = "";
  list.forEach((ele, index)=>{
    // console.log(ele,index)
    options += "<option value="+ ele.id +">"+ ele.name+"</option>"
  })
  document.getElementById('college').innerHTML = options;
  return;
}

function initSelect2(){
  loadScript("https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js", function() {
    $('#college').select2();
  });
}

loadCollegeOptions();


function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {  //IE
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "head" )[0].appendChild( script );
}


