function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const counter = document.querySelector('.parallaxcontact');

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

document.addEventListener('scroll', function () {
    if (isInViewport(counter)) {
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            // Lower inc to slow and higher to slow
            const inc = target / speed;
    
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

// Toggle menu

const toggleMenu = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
}

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
}


// Form validation

const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs = [nameInput, emailInput, phoneInput, messageInput]

let isFormValid = false;
let isValidationOn = false;

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
  
const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};

const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
    elm.classList.add("invalid")
    elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }

    if (!isValidPhone(phoneInput.value)) {
        isFormValid = false;
        invalidateElm(phoneInput);
    }

    if (!messageInput.value) {
        isFormValid = false;
        invalidateElm(messageInput);
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        sendMail();
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validateInputs();
    });
});


function sendMail(params) {
    var tempParams = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value
    };

    emailjs.send('mail_cocktail', 'template_k8v4nhw', tempParams)
    .then(function(res){
        console.log("succes", res.status);
    })
};