//sticky navbar
window.addEventListener("scroll",function(){
    var header=document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY>400)
    })

    
//Image slider
var slideImg=document.getElementById("slideImg");
var images=new Array(
  "image/slide img1.jpg",
  "image/slide img2.jpg",
  "image/slide img3.jpg"
  );
  var len=images.length;
  var i=0;
  function slider(){
    if(i>len-1){
      i=0;
    }
    slideImg.src=images[i];
    i++;
    setTimeout('slider()',5300);
  }