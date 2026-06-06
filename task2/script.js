// Registration Success Alert

const form = document.getElementById("registrationForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

document
.getElementById("successAlert")
.classList.remove("d-none");

form.reset();

});

}

// Contact Form Alert

const contactForm = document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully!");

});

}