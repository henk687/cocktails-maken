// See if the counter section is reached

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

// End See if the counter section is reached

// Counter

const counter = document.querySelector('.counter');

const counters = document.querySelectorAll('.counter');
const speed = 400; // The lower the slower

document.addEventListener('scroll', function () {
    if (isInViewport(counter)) {
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            // Lower inc to slow and higher to slow
            const inc = Math.trunc(target / speed);
    
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    })
}});

// End Counter

const header = document.querySelector('header');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#222';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// Video Slideshow

const slideShow = document.getElementById('slide-show');
const slides = slideShow.getElementsByTagName('video');
var index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// End Video Slideshow

// Toggle Menu

const toggleMenu = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
}

// End Toggle Menu

// Tabs
const tabcontents = document.querySelectorAll(".tabcontent");
const tabLinks = document.querySelectorAll(".tabs button");

function openTab(event, tabName) {
    /*Remove all tabcontents*/
    tabcontents.forEach((tabcontent) => (tabcontent.style.transform = "translateX(100%)"))
    tabcontents.forEach((tabcontent) => (tabcontent.style.transitionDelay = "0s"))

    /*Remove tablinks active classes*/
    tabLinks.forEach((tablink) => tablink.classList.remove("active"));

    /*Add active class on tablink and open it*/
    event.currentTarget.classList.add("active")
    document.getElementById(tabName).style.transform = "translateX(0)";
    document.getElementById(tabName).style.transitionDelay = "0.3s";
};

// End Tabs