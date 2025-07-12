// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the hero section content on load
gsap.from("#home h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#home p", {
  opacity: 0,
  y: 30,
  delay: 0.3,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#home a", {
  opacity: 0,
  scale: 0.8,
  delay: 0.6,
  duration: 0.8,
  ease: "back.out(1.7)"
});

// Animate navbar on scroll (shrink or color change idea)
ScrollTrigger.create({
  start: "top -50",
  onEnter: () => document.querySelector("header").classList.add("shadow-lg"),
  onLeaveBack: () => document.querySelector("header").classList.remove("shadow-lg")
});
// Animate project cards on scroll
// gsap.from("#projects .grid > div, #projects .mt-20", {
//   scrollTrigger: {
//     trigger: "#projects",
//     start: "top 80%",
//   },
//   opacity: 0,
//   y: 60,
//   duration: 1,
//   ease: "power2.out",
//   stagger: 0.2
// });

// About section animation
gsap.from("#about img", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#about div:nth-child(2)", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power2.out"
});
gsap.from("#skills .grid > div", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2
});
gsap.from("#contact h2", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 90%",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#contact .grid", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.2
});
