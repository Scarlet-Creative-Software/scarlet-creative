/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Loading icon
    // $(window).on('load', function () {
    //     setTimeout(() => {
    //         $('.boxLoading').hide();
    //         document.querySelector('.content-after-load').style.opacity = "1";
    //     }, 0);
    //   });

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

    // The phone number should not be clickable for screens larger than 768px
    var links = document.getElementsByClassName('phone-call');

    function setLink() {
        if (links[0]) {
            for (var i = 0; i < links.length; i++) {
                if (window.innerWidth < 768) {
                    links[i].setAttribute('href', "tel:+18682176027");
                }
                else {
                    links[i].setAttribute('href', "javascript:void(0)");
                }
            }
        }
    }
    setLink();

    window.addEventListener('resize', setLink);

    // Scroll to the top of the page
    if ($('.back-top')[0]) {
        $('.back-top').on('click', function() {
            window.scrollTo(0, 0);
        });
    }


});


