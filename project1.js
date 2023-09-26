gsap.from("#img1",{
    opacity:0,
    delay:0.5,
    duration:1,
    y:70
}) 
gsap.from("#img2",{
    opacity:0,
    delay:0.5,
    duration:1,
    x:70
})
gsap.from("#img3",{
    opacity:0,
    delay:0.5,
    duration:1,
    y:-70
})  
gsap.from("#main h1",{
    opacity:0,
    delay:0.5,
    duration:1,
      
})
gsap.from("#page2 h4, #page2 h1,#page2 #about-us",{
    opacity:0,
    delay:0.1,
    y:50,
    // duration:0.4,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 h4",
        scroller:"body",
        start:"top 60%"
    }
})