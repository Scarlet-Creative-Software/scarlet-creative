/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('.mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY < 100) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('.mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Script for phone number field
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["tt", "us", "uk"],
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    const info = document.querySelector(".validate-info");
    const error = document.querySelector(".validate-error");

    $('#phone').on('input', function(event) {
        event.preventDefault();
       
        const phoneNumber = phoneInput.getNumber();
       
        info.style.display = "none";
        error.style.display = "none";
       
        if (phoneInput.isValidNumber()) {
          info.style.display = "";
          info.innerHTML = `Phone number entered: <strong>${phoneNumber}</strong>`;
        } else {
          error.style.display = "";
          error.innerHTML = `Invalid phone number.`;
        }
    });

    // Scroll to the top of the page
    $('.back-top').on('click', function() {
        window.scrollTo(0, 0);
    });

});


