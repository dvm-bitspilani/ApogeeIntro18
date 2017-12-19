
function openNav() {
    document.getElementById("viewlist").style.bottom = "0";
    // document.getElementById("viewlist").style.width = "100vw";
}

function closeNav() {
    document.getElementById("viewlist").style.bottom = "-100vh";
}
function openinfo() {
    
    document.getElementById("incontmain").style.top = "0";
     document.getElementById("incontmain").style.left = "0";
    

}
function closeinfo() {
    
    document.getElementById("incontmain").style.top = "100vh";
    // document.getElementById("viewlist").style.top = "-100vh";
}


 var div = document.createElement('div');
    div.innerHTML = '<img class="img" src="Image/paper.svg" ><p class="infop">Paper presentation forms the core event of APOGEE that showcases a wide range of technical and review papers on a spectrum of topics ranging from industrial applications to the very latest scientific innovations.<br><br><a class="link2" href="https://bits-apogee.org/2018/portal" target="_blank">Click here to know more (paper and projects portal)</a></p>';
     document.getElementById('pap').appendChild(div);
     div.id = "paperinrcontainer";

 var div = document.createElement('div');
    div.innerHTML = '<p class="infop">APOGEE exhibits over 550 projects in various fields of science and engineering. Based on practical application, they showcase unparalleled excellence. Some of the categories of Projects include Electronics, Environment, Software Development and Mathematical Modelling.. <br> <b>Abstract submission for non BITSian participants is open from 14th December 2016 to 7th January 2017.</b><br><br><span class="right" style="text-align:right"><a class="link2" href="https://bits-apogee.org/2018/portal" target="_blank">Click here to know more (paper and projects portal)</a></span></p><img class="img" src="Image/projects.svg" >';
     document.getElementById('pre').appendChild(div);
     div.id = "projectinrcontainer";