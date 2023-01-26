/* -------------------------------------------------------------------
 * Template Name         : Pepechura - Restaurant Template
 * Theme Author Name     : Yucel Yilmaz
 * Created Date          : 29 October 2021
 * Version               : 1.0
 * File                  : main.js
------------------------------------------------------------------- */
/* -------------------------------------------------------------------
   All Functions                               
   ------------------------ /
 * 01.Preloader
 * 02.Header
 * 03.Counter Up
 * 04.Owl Carousel
 * 05.ScrollIt
 * 06.Background Image Path
 * 07.Gallery
 * 08.Magnific Popup
 * 09.Wow Js
 * 10.Contact Form
------------------------------------------------------------------- */

$( document ).ready( function() {
    // All Functions
    PepeChura_PreLoader();
    PepeChura_Header();
    PepeChura_CounterUp();
    PepeChura_Carousel();
    PepeChura_ScrollIt();
    PepeChura_BgImgPath();
    PepeChura_Gallery();
    PepeChura_MagnificPopup();
    PepeChura_WowJs();
    PepeChura_ContactForm();
});

/* -------------------------------------------------------------------
 * 01.Preloader
------------------------------------------------------------------- */
function PepeChura_PreLoader(){
    "use-scrict";

    // Variables
    let preloaderWrap = $( '#preloader-wrap' );
    let loaderInner = preloaderWrap.find( '.preloader-inner' );
 
    $( window ).ready(function(){
        loaderInner.fadeOut(); 
        preloaderWrap.delay(350).fadeOut( 'slow' );
    });   
}

/* -------------------------------------------------------------------
 * 02.Header
------------------------------------------------------------------- */
function PepeChura_Header() {
    "use-strict";

    // Variables
    let header          = $( '.header' );
    let logoTransparent = $( '.logo-transparent' );
    let scrollTopBtn    = $( '.scroll-top-btn' );
    let logoNormal      = $( '.logo-normal' );
    let windowWidth     = $( window ).innerWidth();
    let scrollTop       = $( window ).scrollTop();
    let $dropdown       = $( '.dropdown' );
    let $dropdownToggle = $( '.dropdown-toggle' );
    let $dropdownMenu   = $( '.dropdown-menu' );
    let showClass       = 'show';

    // When Window On Scroll
    $( window ).on( 'scroll', function(){
        let scrollTop = $( this ).scrollTop();

        if( scrollTop > 85 ) {
            logoTransparent.hide();
            logoNormal.show();
            header.addClass( 'header-shrink' );
            scrollTopBtn.addClass( 'active' );
        }else {
            logoTransparent.show();
            logoNormal.hide();
            header.removeClass( 'header-shrink' );
            scrollTopBtn.removeClass( 'active' );
        }
    });

    // The same process is done without page scroll to prevent errors.
    if( scrollTop > 85 ) {
        logoTransparent.hide();
        logoNormal.show();
        header.addClass( 'header-shrink' );
        scrollTopBtn.addClass( 'active' );
    }else {
        logoTransparent.show();
        logoNormal.hide();
        header.removeClass( 'header-shrink' );
        scrollTopBtn.removeClass( 'active' );
    }

    // Window On Resize Hover Dropdown
    $( window ).on( 'resize', function() {
        let windowWidth  = $( this ).innerWidth();

        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $( this ).hasClass( showClass );
                    if( hasShowClass!==true ){
                        $( this ).addClass( showClass );
                        $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                        $( this ).find( $dropdownMenu ).addClass( showClass );
                    }
                },
                function() {
                    $( this ).removeClass( showClass);
                    $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                    $( this ).find( $dropdownMenu ).removeClass( showClass );
                }
            );
        }else {
            $dropdown.off( 'mouseenter mouseleave' );
            header.find( '.main-menu' ).collapse( 'hide' );
        }
    });
    // The same process is done without page scroll to prevent errors.
    if ( windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $( this );

                var hasShowClass  = $this.hasClass( showClass );

                if( hasShowClass!==true ){
                    $this.addClass( showClass);
                    $this.find ( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                    $this.find( $dropdownMenu ).addClass( showClass );
                }
            },
            function() {
                const $this = $( this );
                $this.removeClass( showClass );
                $this.find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                $this.find( $dropdownMenu ).removeClass( showClass );
            }
        );
    }else {
        $dropdown.off( 'mouseenter mouseleave' );
    }
}

/* -------------------------------------------------------------------
 * 03.Counter Up
------------------------------------------------------------------- */
function PepeChura_CounterUp() {
    "use-strict";

    // Variables
    let counterItem     = $( '.counter' );

    counterItem.counterUp({
        delay: 10,
        time: 1000
    });
}

/* -------------------------------------------------------------------
 * 04.Owl Carousel
------------------------------------------------------------------- */
function PepeChura_Carousel(){

    "use-strict";

    // Variables
    let teamCarousel        = $( '.team-carousel' );
    let blogCarousel        = $( '.blog-carousel' );
    let testimonialCarousel = $( '.testimonial-carousel' );
    let heroSlider          = $( '.hero-slider' );

    teamCarousel.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    blogCarousel.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    testimonialCarousel.owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Variables
    let dataSlideItem         = $( '*[data-slide-image-path]' );

    dataSlideItem.each( function() {
        let imgPath        = $( this ).attr( 'data-slide-image-path' );
        $( this).css( 'background-image', 'url(' + imgPath + ')' );
    });

    heroSlider.owlCarousel({
        loop: true,
        margin:0,
        nav:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 600,
        autoplayHoverPause:true,
        navText: [ "<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'><i>" ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items: 1
            }
        }
    });
}  

/* -------------------------------------------------------------------
 * 05.ScrollIt
------------------------------------------------------------------- */
function PepeChura_ScrollIt() {
    "use-strict";

    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
    });
}

/* -------------------------------------------------------------------
 * 06.Background Image Path
------------------------------------------------------------------- */
function PepeChura_BgImgPath(){
    "use-scrict";

    // Variables
    let dataBgItem         = $( '*[data-bg-image-path]' );

    dataBgItem.each( function() {
        let imgPath        = $( this ).attr( 'data-bg-image-path' );
        $( this).css( 'background-image', 'url(' + imgPath + ')' );
    });
}

/* ------------------------------------------------------------------- */
/* 07.Gallery
/* ------------------------------------------------------------------- */
function PepeChura_Gallery() {
    "use-strict";

    // Variables 
    let galleryWrapper     = $( '#menu-gallery-masonry-wrap' );
    let portfolioFilterBtn = $( '.menu-gallery-filter a' );

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded( function() {
        let grid = galleryWrapper.isotope({
            itemSelector: '.menu-gallery-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.menu-gallery-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on( 'click', function() {
            let filterValue = $(this).attr( 'data-menu-gallery-filter' );
            grid.isotope({
                filter: filterValue
            });
        });
    });

    // filter items on button click
    portfolioFilterBtn.on( 'click', function() {
        portfolioFilterBtn.removeClass( 'current' );
        $(this).addClass( 'current' );
        event.preventDefault();
    });
}

/* -------------------------------------------------------------------
 * 08.Magnific Popup
------------------------------------------------------------------- */
function PepeChura_MagnificPopup() {
    "use-strict";

    let videoBtn           = $( '.about-video-btn' );

    videoBtn.magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
}

/* -------------------------------------------------------------------
 * 09.Wow Js
------------------------------------------------------------------- */
function PepeChura_WowJs() {
    "use-strict";

    let wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      });
    wow.init();
}
/* -------------------------------------------------------------------
 * 10.Contact Form
------------------------------------------------------------------- */
function PepeChura_ContactForm(){
    "use-strict";

    var formControl         = $('#contactForm .custom-form-control');

    // Added AutoComplete Attribute Turned Off
    formControl.attr("autocomplete","off");

    //  Captcha Variables    
    let contactFormCaptchaVal     = $("#contactFormCaptchaVal");
    let contactFormCaptchaSpan    = $('#contactFormCaptchaSpan');
    let contactFormCaptchaInput   = $('#contactFormCaptchaInput');

    // Generates the Random number function 
    function randomNumber(){
         
        let a = Math.ceil(Math.random() * 9) + '',
            b = Math.ceil(Math.random() * 9) + '',
            c = Math.ceil(Math.random() * 9) + '',
            d = Math.ceil(Math.random() * 9) + '',
            e = Math.ceil(Math.random() * 9) + '',
            code = a + b + c + d + e;
   
        contactFormCaptchaVal.val(code);
        contactFormCaptchaSpan.html(code);
    }

    // Called random number function
    randomNumber();

    // Validate the Entered input aganist the generated security code function   
    function validateCaptcha() {
        let str1 = contactFormCaptchaVal.val();
        let str2 = contactFormCaptchaInput.val();
        if (str1 == str2) {
            return true;
        } else {
            return false;
        }
    }

    // Contact Form Submit
    $("#contactForm").on("submit", function(event) {

        //  Contact Form Input Value 
        let $this                   = $(this);
        let name                    = $("#contactName").val().trim();
        let email                   = $("#contactEmail").val().trim();
        let phone                   = $("#contactPhone").val().trim();
        let subject                 = $("#contactSubject").val().trim();
        let message                 = $("#contactMessage").val().trim();
        let validateEmail           = $("#contactEmail").conformyEmailValidate();
        let validatePhone           = $("#contactPhone").conformyPhoneValidate();

        if (name =='' || email =='' || phone == '' || message == '' || contactFormCaptchaInput == '') {
            if($('.contact-alerts .empty-form').css("display") == "none"){
                $('.contact-alerts .empty-form').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if ( subject == "") {
            if($('.contact-alerts .empty-select').css("display") == "none"){
                $('.contact-alerts .empty-select').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!validatePhone === true) {
            if($('.contact-alerts .phone-invalid').css("display") == "none"){
                $('.contact-alerts .phone-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!validateEmail === true) {
            if($('.contact-alerts .email-invalid').css("display") == "none"){
                $('.contact-alerts .email-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (validateCaptcha() != true){
            if($('.contact-alerts .security-alert').css("display") == "none"){
                $('.contact-alerts .security-alert').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else {
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $this.find(':submit').attr('disabled','true');
            $.ajax({
                url: "phpmailer/send_mail.php",
                data: {
                    contact_name: name,
                    contact_email: email,
                    contact_phone: phone,
                    contact_subject: subject,
                    contact_message: message,
                },
                type: "POST",
                success: function(response) {
                    $("#contactForm")[0].reset();
                    if (response == true) {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $("#contactFormSuccessModal").modal("show");
                        // Called random number function
                        randomNumber();
                    } else {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $("#contactFormDangerModal").modal("show");
                        $("#contactFormDangerModal #error_message").html(response);
                        // Called random number function
                        randomNumber();
                    }
                }
            });
        }
        event.preventDefault();
    });
}