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
        if (window.scrollY < 90) {
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

    // Scroll to the top of the page
    $('.back-top').on('click', function() {
        window.scrollTo(0, 0);
    });

    // Header Background Animation
    // (function() {

    // Set height on screens > 1400px
    if ($(window).width() > 1400) {
        console.log("width", $(window).width());
        console.log("height", $(window).height());
        var height, largeHeader;

        // Main
        initHeader();
        addListeners();
    
        function initHeader() {
            height = window.innerHeight;
    
            largeHeader = document.getElementsByClassName('header-bg');
            for (var i = 0; i < largeHeader.length; i++)
                largeHeader[i].style.height = height+'px';
        }
    
        function resize() {
            height = window.innerHeight;
            for (var i = 0; i < largeHeader.length; i++)
                largeHeader[i].style.height = height+'px';
        }
    
        // Event handling
        function addListeners() {
            window.addEventListener('resize', resize);
        }
    };
    // });


});


