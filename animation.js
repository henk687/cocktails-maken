// Intro Animation
const tl = gsap.timeline({ 
  defaults: { ease: "power1.out" } 
});

tl.to(".text", { 
  y: "0%", 
  duration: 1, 
  stagger: 0.25 
});

tl.to(".slider", { 
  y: "-100%", 
  duration: 1.5, 
  delay: 0.5 
});

tl.to(".intro", { 
  y: "-100%", 
  duration: 1 
}, "-=1");

tl.fromTo("nav", { 
  opacity: 0 }, { 
    opacity: 1, 
    duration: 1 
});

tl.fromTo(".container", { 
  opacity: 0 }, { 
    opacity: 1, 
    duration: 1 
}, "-=1");

tl.fromTo(".cloud-main", { 
  opacity: 0 }, { 
    opacity: 1, 
    duration: 3 
  }, "-=1");
  
tl.fromTo(".moon", { 
  opacity: 0 }, { 
    opacity: 1, 
    duration: 1 
  }, "-=1");

// End Intro Animation

// Horizontal Image Slider

gsap.registerPlugin(ScrollTrigger);

var sliderImages = gsap.utils.toArray('.horizontal-slider img');

var getTotalWidth = () => {
  totalWidth = 0;
  sliderImages.forEach((image) => totalWidth += image.offsetWidth);
};

getTotalWidth();
ScrollTrigger.addEventListener('revert', getTotalWidth);

gsap.to(sliderImages, {
  scrollTrigger: {
    trigger: '.horizontal-slider',
    start: 'top top',
    end: () => `+=${totalWidth}`,
    pin: true,
    scrub: true,
    invalidateOnRefresh: true
  },
  x: () => (totalWidth - document.documentElement.clientWidth) * -1,
  ease: "none"
});

// End Horizontal Image Slider

// Progress Bar

gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

// End Progress Bar

// Top And Bottom Animation
const projectTriggers = document.querySelectorAll(".parallax-trigger");

projectTriggers.forEach(addTimeline);

function addTimeline(project, index) {

  const rotateright = project.querySelector(".rotate-from-right"),
  fade = project.querySelector(".fade"),
  left = project.querySelector(".from-left"),
  right = project.querySelector(".from-right"),
  boat = project.querySelector(".boat-animation"),
  rotate180 = project.querySelector(".rotate-180"),
  rotate90 = project.querySelector(".rotate-90"),

  island = project.querySelector(".island-animation"),
  anchor = project.querySelector(".anchor-animation"),
  dolphin = project.querySelector(".dolphin-animation"),
  dolphin2 = project.querySelector(".dolphin2-animation")
  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      ease: "power2",
      toggleActions: 'play none reverse none',
      duration: 0.5,
      scrub: 1   
    }
  })

  const timelinebottom = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      start: '20px 160%',
      end: 'top center',
      ease: "power2",
      toggleActions: 'play none reverse none',
      duration: 0.5,
      scrub: 1 
    }
  })

  timeline.from(rotateright, {
    x: 200,
    rotate: -27
  })

  timeline.from(fade, {
    opacity: 0
  }, 0 )

  timeline.from(right, {
    x: 400
  }, 0 )

  timeline.from(rotate180, {
    rotate: -180
  }, 0 )

  timeline.from(rotate90, {
    rotate: -90
  }, 0 )

  timeline.from(left, {
    x: -300
  }, 0 )

  timeline.from(boat, {
    x: -200,
    rotate: 27
  }, 0 )

  timelinebottom.from(island, {
    x: -400
  }, 0 ) 

  timelinebottom.from(anchor, {
    y: -150
  }, 0 ) 

  timelinebottom.from(dolphin, {
    y: 450,
    x: -800
  }, 0 ) 

  timelinebottom.from(dolphin2, {
    y: -450,
    x: 400
  }, 0 ) 
}

// End Top And Bottom Animation