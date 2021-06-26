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



// Animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".cloud-main", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=1");
tl.fromTo(".parasol", { opacity: 0 }, { opacity: 0.9, duration: 3 }, "-=1");
tl.fromTo(".cocktail-glass", { opacity: 0 }, { opacity: 0.9, duration: 3 }, "-=1");

gsap.registerPlugin(ScrollTrigger);

gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

gsap.from('.animate-info', {
    scrollTrigger: '.container-info',
    duration: 1.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
    delay: 3.4,
    scrub: 1
    
});
  
gsap.from('.animation-card', {
    scrollTrigger: '.card-wrapper',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.6,
    delay: 3.4,
    scrub: 1
});

gsap.fromTo(".animation-tabs", { opacity: 0 }, { opacity: 1, duration: 1, delay: 5 });

gsap.from('.animation-contactinfo', {
    scrollTrigger: '.contactInfo',
    start: "top center",
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.6,
    delay: 5,
    end: "+=800",
    scrub: true,
});

gsap.from('.animation-contactform', {
    scrollTrigger: '.contactForm',
    start: "top center",
    duration: 1,
    opacity: 0,
    x: 150,
    stagger: 0.6,
    delay: 5,
    end: "+=300",
    scrub: true,
});

//top animation
const projectTriggers = document.querySelectorAll(".project-trigger");

projectTriggers.forEach(addTimeline);

function addTimeline(project, index) {
    const text = project.querySelector(".project-text"),
    fade = project.querySelector(".fade"),
    image = project.querySelector(".project-image"),
    right = project.querySelector(".animation-right"),
    boat = project.querySelector(".boat-animation");
    sun = project.querySelector(".sun-animation");

    island = project.querySelector(".island-animation");
    anchor = project.querySelector(".anchor-animation");
    dolphin = project.querySelector(".dolphin-animation");
    dolphin2 = project.querySelector(".dolphin2-animation");
  
  const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: project,
        start: 'top center',
        end: 'center center',
        ease: "power2",
        // markers: true,
        // toggleActions: 'play none reverse none',
        scrub: 1
        
    }
  })
  const timelinebottom = gsap.timeline({
    scrollTrigger: {
        trigger: project,
        start: '20px 160%',
        end: 'top center',
        ease: "power2",
        // markers: true,
        // toggleActions: 'play none reverse none',
        scrub: 1
        
    }
  })
  timeline.from(text, {
    x: 200,
    rotate: -27 ,
    duration: 0.5,
    // stagger: 0.2
  })
  timeline.from(fade, {
    opacity: 0,
    duration: 1,
    // stagger: 0.2
  }, 0 )
  timeline.from(right, {
    x: 400,
    // opacity: 0,
    duration: 0.5,
    // stagger: 0.2
}, 0 )
timeline.from(sun, {
    rotate: -180,
    duration: 0.5,
    // stagger: 0.2
}, 0 )
timeline.from(image, {
    x: -300,
    // opacity: 0,
    duration: 0.5
}, 0 )
timeline.from(boat, {
    x: -200,
    rotate: 27 ,
    // opacity: 0,
    duration: 0.5,
    // stagger: 0.2
}, 0 )
timelinebottom.from(island, {
    x: -400,
    // opacity: 0,
    duration: 0.5
}, 0 ) 
timelinebottom.from(anchor, {
    y: -150,
    // opacity: 0,
    duration: 0.5
}, 0 ) 
timelinebottom.from(dolphin, {
    y: 450,
    x: -800,
    // opacity: 0,
    duration: 0.5
}, 0 ) 
timelinebottom.from(dolphin2, {
    y: -450,
    x: 400,
    // opacity: 0,
    duration: 0.5
}, 0 ) 
}