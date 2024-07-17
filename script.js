gsap.from(".symbol",{
    y:-50,
    duration: 1,
    opacity:0,
})

gsap.from(".othersection",{
    y:-50,
    duration: 1,
    opacity:0,
})

var a = gsap.timeline()

a.from(".img",{
    x:100,
    duration:0.8,
    opacity:0
})

a.from("h3",{
    y:100,
    duration:0.8,
    opacity:0,
})

a.from("h1",{
    y:100,
    duration:0.8,
    opacity:0
})

a.from("h2",{
    y:100,
    duration:0.5,
    opacity:0
})

a.from("button", {
    scale:0,
    opacity:0,
    duration:1
})



gsap.from(".lite-box h4", {
    x: 100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"h4",
        scroller:"body",
        scrub :3,
        start:"top 90%",
        end : "top 30%"
    }
})

gsap.from(".lite-box", {
    x:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".lite-box",
        scroller:"body",
        scrub : 3,
        start:"top 90%",
        end : "top 30%"
    }
})




// page4

var cursor = document.querySelector("#cursor");
var main = document.querySelector("body");
var image = document.querySelector(".page41 .layer");

main.addEventListener("mousemove", function (val){
    gsap.to(cursor,{
        x:val.x,
        y:val.y,
        duration:1.5,
        ease:"back.out(1.7)"
    })
})

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "CLICK HERE."
    gsap.to(cursor,{
        scale:1.5,
        backgroundColor:"rgba(255, 255, 255, 0.384)",
        backdropFilter:"blur",
        color:"black"
    })
})

image.addEventListener("mouseleave", function(){
    cursor.innerHTML = "XZIST"
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"rgba(128, 128, 128, 0.789)",
        color:"white"
    })
})

var background = document.querySelector(".layer2");

background.addEventListener("mouseenter", function(){
    cursor.innerHTML= "SHOP NOW"
    gsap.to(cursor, {
        scale:1.5,
        backgroundColor:"rgba(255, 255, 255, 0.402)",
        backdropFilter : "blur",
        color:"black"
    })
})

background.addEventListener("mouseleave", function(){
    cursor.innerHTML= "XZIST"
    gsap.to(cursor, {
        scale:1,
        backgroundColor:"rgba(128, 128, 128, 0.789)",
        color:"white"
    })
})


function moves(){

    h5= document.querySelector("h5");
    h5.innerHTML="VINTAGE DRESS"
    h5.style.fontWeight = "Bolder"

    gsap.to(".layer2",{
        x:-1190
    })

    gsap.to(".page42",{
        duration:2,
        backgroundColor:"rgba(128,128,128,0.712)"
    })

    gsap.to(".A img",{
        x:250,
        duration:1
    })
    gsap.to(".B img",{
        x:500,
        duration:1
    })
    gsap.to(".C img",{
        x:750,
        duration:1
    })

    gsap.to("h5",{
        y:-150,
    })

    var k = document.querySelector("h5");

    k.style.fontSize = "2.5rem";
}  

