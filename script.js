/*Preload animation*/
jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('.loader-wrapper').fadeOut('slow', function () {
            });
        },700); // set the time here
    });
});

/*Toggle animation*/
$(document).ready(function() {
  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
  $('.top-nav .nav-link').on('click', function() {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });
});

/*Typewriter effect*/
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Data Modeler", "ETL Developer", "Data Wrangler",  "Story Teller"];
const typingDelay = 200;
const erasingDelay = 75;
const newTextDelay = 100; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*Smooth scroll to sections*/
$('nav a[href*="#"]').on("click", function () {
    $('.nav-list').toggleClass('active');
 $("html, body").animate({
scrollTop: $($(this).attr("href")).offset().top - 5
}, 1500);
  });

/*Smooth scroll back up*/
$("#up").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
         }, 1000);
  });

// show portfolio item extra content
$(".expandDetails").on("click", function () {
$(this).parent().siblings(".portfolio-long").slideToggle(500);
$(this).children(".arrowDown").toggle();
$(this).children(".arrowUp").toggle();
});


// animations
AOS.init({
    easing: "ease",
    duration: 1000,
    once: true,
    disable: 'mobile'
  });

//contact button sweetalert
// function sweetalertclick() {
//   swal({
//   title: "Thanks for dropping by!",
//   text: "I'll get back to you ASAP",
//   icon: "success",
//   button: "Aww yiss!",
// });
// }

function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false)
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}
