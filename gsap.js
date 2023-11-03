// gsap.to(".box", {
//   x: 800,
//   y: 500,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "red",
//   //   for some element ko alag alg chalana ka liya
//   stagger: 1,
//   //   kitni bar repeat ho
//   // -1 = infinety
//   repeat: 2,
//   //   start to end and end to start chalana ka liya
//   yoyo: 1,
// });

//------------------------------- second-------------------------------

// var tl = gsap.timeline();
// tl.to(".box1", {
//   x: 500,
//   backgroundColor: "white",
//   delay: 1,
// });
// tl.to(".box2", {
//   x: 500,
//   backgroundColor: "red",
// });
// tl.to(".box3", {
//   x: 500,
//   backgroundColor: "green",
// });

// =--------------------scrool ---------------

gsap.from(".bigBox .smallBox", {
  rotate: 360,
  duration: 3,
  scale: 1.5,
  borderRadius: 50,
  backgroundColor: "green",
});
gsap.from(".bigBox .smallBox2", {
  rotate: 360,
  //   duration: 5,
  scale: 1.5,
  backgroundColor: "red",
  opacity: 0,
  borderRadius: 0,
  scrollTrigger: {
    trigger: ".bigBox .smallBox2",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});
gsap.from(".bigBox .smallBox3", {
  rotate: 360,
  duration: 5,
  scale: 1.5,
  borderRadius: 50,
  backgroundColor: "black",
  scrollTrigger: ".bigBox .smallBox3",
});
