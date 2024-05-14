


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});


var fixed=document.querySelector(".fixed-img")
var elemC=document.querySelector(".elem-container")
var elem=document.querySelectorAll(".elem")
elemC.addEventListener("mouseenter",function(){
  fixed.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
  fixed.style.display="none"
})
elem.forEach(function(now){
let img=now.getAttribute("data-img")

now.addEventListener("mouseenter",function(){
  fixed.style.backgroundImage=`url(${img})`
})
})

function sweep(){


let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,

});
}
sweep()

let h1=document.querySelector(".top-flexi .h1")
let h2=document.querySelector(".top-flexi .h2")
let h3=document.querySelector(".top-flexi .h3")
let imagee=document.querySelector(".r-flexi img")



h2.addEventListener("click",function(){
  let para=document.querySelector(".bottom-flexi p")
  para.innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
  h2.style.color="white"
  h1.style.color="gray"
  h3.style.color="gray"
  h2.style.borderLeft=`4.5px solid #FE330A`;
  h1.style.borderLeft=`4.5px solid gray`;
  h3.style.borderLeft=`4.5px solid gray`;
  imagee.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"
  
})
h1.addEventListener("click",function(){
  let para=document.querySelector(".bottom-flexi p")
  para.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
  h2.style.color="gray"
  h3.style.color="gray"
  h1.style.color="white"
  h1.style.borderLeft=`4.5px solid #FE330A`;
  h2.style.borderLeft=`4.5px solid gray`;
  h3.style.borderLeft=`4.5px solid gray`;
  imagee.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-800.jpg"
  
})
h3.addEventListener("click",function(){
  let para=document.querySelector(".bottom-flexi p")
  para.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
  h2.style.color="gray"
  h1.style.color="gray"
  h3.style.color="white"
  h3.style.borderLeft=`4.5px solid #FE330A`;
  h2.style.borderLeft=`4.5px solid gray`;
  h1.style.borderLeft=`4.5px solid gray`;
  imagee.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-800.jpg"
  
})

let loader=document.querySelector(".loader")
setTimeout(function(){
  loader.style.top="-100%"
},4000)