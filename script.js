gsap.to("#box1",{
    x: 1000,
    duration: 2,
    delay: 1,
    margin: 10,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:1.5,
    repeat:1
})
gsap.from("#box2",{
    x:1000,
    duration: 2,
    delay: 1,
    margin: 10,
    scale:.5,
    borderRadius:"150px",
    repeat:-1,
    yoyo:true
})
gsap.from("h1",{
    color:"red",
    opacity:0,
    delay:1,
    y:"40px",
    duration:2,
    stagger:-.5,
    
})
// gsap.to("#box3",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// gsap.to("#box4",{
//     x:1500,
//     backgroundColor:"yellow",
//     rotate:360,
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box5",{
//     x:1500,
//     backgroundColor:"green",
//     scale:0.5,
//     rotate:360,
//     duration:1.5,
//     delay:4
// })


var tl = gsap.timeline();

tl.to("#box3",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#box4",{
    x:1500,
    rotate:360,
    duration:1.5
})
tl.to("#box5",{
    x:1500,
    rotate:360,
    duration:1.5
   
})
var tl2 = gsap.timeline();

tl2.from("h2",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:0.5
})
tl2.from("h4",{
    y:-30,
    opacity:0,
    duration: 1,
    stagger: .5
})
