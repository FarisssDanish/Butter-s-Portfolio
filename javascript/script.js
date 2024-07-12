$(document).ready(function() {
    // Typed.js initialization
    if (window.location.hash) {
        // Get the hash value
        var hash = window.location.hash;

        // Smooth scroll to the section
        $('html, body').animate({
            
            scrollTop: $(hash).offset().top
        }, 500, 'linear');
    }

    var typed = new Typed('.auto-type', {
        strings: ["New Media Student"],
        typeSpeed: 200,     // Typing speed in milliseconds
        backSpeed: 70,      // Backspacing speed in milliseconds
        smartBackspace: true, // Set to true to backspace only the current string instead of the whole strings array
        loop: false         // Loop indefinitely
    });

    // Smooth scrolling function
    function scrollToElement(element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, 100); // Adjust the duration of the scroll animation as needed
    }

    // Navigation button click handlers
    $("#Contact").click(function() {
        $(".Socmed-Design, .Graphic-Design, .UI-UX-Design").hide();
        scrollToElement("#information");
    });

    // Redirect buttons
    $(".linked-in img").click(function() {
        // Redirect to the specified URL
        window.open("https://www.linkedin.com/in/nur-batrisyia-61609a2b7/", "_blank");
    });
    $("#linkedin-logo").click(function() {
        // Redirect to the specified URL
        window.open("https://www.linkedin.com/in/nur-batrisyia-61609a2b7/", "_blank");
    });
   
    $("#linkedin-section").click(function() {
        // Redirect to the specified URL
        window.open("https://www.linkedin.com/in/nur-batrisyia-61609a2b7/", "_blank");
    });
    
  
    
    $("#call-logo").click(function() {
        // Redirect to the specified URL
        window.location.href = "https://wa.me/60123777629";

    });
    $("#call-section").click(function() {
        // Redirect to the specified URL
        window.location.href = "https://wa.me/60123777629";

    });
    $("#gmail-logo").click(function() {
        // Redirect to the specified URL
        window.location.href = "mailto:batrisyiaatajuddin@gmail.com";

    });
    $("#gmail-section").click(function() {
        // Redirect to the specified URL
        window.location.href = "mailto:batrisyiaatajuddin@gmail.com";
        cursor:Pointer;
    });
    

    
    $("#btn-1").click(function() {
        // Redirect after the animation duration
        window.location.href = "/html/Social-Media.html";
    });
    $("#btn-2").click(function() {
        // Redirect to the specified URL
        window.location.href = "/html/ui-ux.html";
    });
    $("#btn-3").click(function() {
        // Redirect to the specified URL
        window.location.href = "/html/Graphic-Design.html";
    });

    // Sticky navigation bar
    $(window).scroll(function() {
        var sticky = $('.navbar').offset().top;
        if ($(window).scrollTop() >= sticky) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // Function to add 'visible' class to elements in view
    function revealOnScroll() {
        const elements = document.querySelectorAll('.fade-in');

        for (let i = 0; i < elements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = elements[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                elements[i].classList.add('visible');
            } else {
                elements[i].classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll); // To trigger the effect on page load
});
