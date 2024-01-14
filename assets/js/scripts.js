jQuery(function($) {

    'use strict';

    /* ======= Blank Wrapper ======= */
    (function() {

        // content here...

    }());


    /* ======= Preloader ======= */
    (function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());

    $(document).ready(function(e) {
        /* To add and remove active class on clicked li of navigation. */
        var selector = 'nav li';

        $(selector).on('click', function() {
            $(selector).removeClass('active');
            $(this).addClass('active');
        });
        /* END */


    });

    $('a[data-toggle="modal"]').click(function() {

        $($(this).attr('data-target')).fadeIn('fast');
    });


    /*======== Fancy Box Init ========*/
    var myTheme = window.myTheme || {},
        $win = $(window);

    myTheme.Fancybox = function() {

        jQuery(".fancybox-pop").fancybox({
            maxWidth: 900,
            maxHeight: 700,
            fitToView: true,
            width: "80%",
            height: "80%",
            autoSize: false,
            closeClick: false,
            openEffect: "elastic",
            closeEffect: "none"
        });

        jQuery(".various").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: "70%",
            height: "70%",
            autoSize: false,
            closeClick: false,
            openEffect: "elastic",
            closeEffect: "none"
        });

    };

    myTheme.Fancybox();


    /* End Fancy Box */




    /* ======= Navbar for Desktop and Mobile Devices ======= */
    (function() {

        var navbar = $('.navbar-custom'),
            width = Math.max($(window).width(), window.innerWidth),
            mobileTest;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        }

        navbarSubmenu(width);
        hoverDropdown(width, mobileTest);

        $(window).resize(function() {
            var width = Math.max($(window).width(), window.innerWidth);
            hoverDropdown(width, mobileTest);
        });

        /* ---------------------------------------------- /*
         * Navbar submenu
        /* ---------------------------------------------- */

        function navbarSubmenu(width) {
            if (width > 767) {
                $('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
                    var MenuLeftOffset = $('.dropdown-menu', $(this)).offset().left;
                    var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
                    if (width - MenuLeftOffset > Menu1LevelWidth * 2) {
                        $(this).children('.dropdown-menu').css({
                            'right': 'auto',
                            'left': '0'
                        });
                    } else {
                        $(this).children('.dropdown-menu').css({
                            'right': '0',
                            'left': 'auto'
                        });
                    }
                    if ($('.dropdown', $(this)).length > 0) {
                        var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                        if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                            $(this).children('.dropdown-menu').addClass('left-side');
                        } else {
                            $(this).children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });
            }
        }



        /* ---------------------------------------------- /*
         * Navbar hover dropdown on desctop
        /* ---------------------------------------------- */

        function hoverDropdown(width, mobileTest) {
            if ((width > 767) && (mobileTest !== true)) {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
                var delay = 0;
                var setTimeoutConst;
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
                        var $this = $(this);
                        setTimeoutConst = setTimeout(function() {
                            $this.addClass('open');
                            $this.find('.dropdown-toggle').addClass('disabled');
                        }, delay);
                    },
                    function() {
                        clearTimeout(setTimeoutConst);
                        $(this).removeClass('open');
                        $(this).find('.dropdown-toggle').removeClass('disabled');
                    });
            } else {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
                $('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).parent().siblings().removeClass('open');
                    $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                    $(this).parent().toggleClass('open');
                });
            }
        }

        /* ---------------------------------------------- /*
         * Navbar collapse on click
        /* ---------------------------------------------- */

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

    }());




    /* ======= Search box ======= */
    $("#search-box").hide();
    var searchIcon = $(".search-icon");
    var searchBox = $("#search-box");
    searchIcon.on('click', function(event) {
        searchIcon.toggleClass("active");
        searchBox.slideToggle();
    });


    $('.collapse-top').addClass('collapsed');
    var $window = $(window),
        $collapseDiv = $('.collapse-div'),
        $collapseTop = $('.collapse-top');

    function resize() {
        if ($window.width() < 992) {
            $collapseTop.attr("data-toggle", "collapse");
            $collapseDiv.addClass('collapse');
        } else {
            $collapseDiv.removeClass('collapse');
            $collapseTop.removeAttr('data-toggle');
        }
    }

    $window.resize(resize).trigger('resize');

    //Custom Scroll bar 

    $('.single-package').mCustomScrollbar({
        theme: "dark-2"
    });


    /* === jQuery for page scrolling feature - requires jQuery Easing plugin === */

    jQuery('a.page-scroll').on('click', function(event) {
        var $anchor = jQuery(this);
        $('html, body').stop().animate({
            scrollTop: jQuery($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



    /* === Sticky Menu === */
    (function() {
        var nav = $('.navbar');
        var scrolled = false;

        $(window).scroll(function() {

            if (110 < $(window).scrollTop() && !scrolled) {
                nav.addClass('sticky animated fadeInDown').animate({
                    'margin-top': '0px'
                });

                scrolled = true;
            }

            if (110 > $(window).scrollTop() && scrolled) {
                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                scrolled = false;
            }
        });
    }());




    /* ======= Full Screen Menu  ======= */
    $('.nav-bars, .tt-nav').on('click', function() {
        $('.nav-bars').toggleClass('navbar-on');
        $('.tt-nav').fadeToggle();
        $('.tt-nav').removeClass('nav-hide');
    });



    /* ======= Full Screen Background ======= */

    $(".tt-fullHeight").height($(window).height());
    $(window).resize(function() {
        $(".tt-fullHeight").height($(window).height());
    });



    /* === Youtube Video Script === */
    if ($('.player').length > 0) {

        jQuery(".player").mb_YTPlayer();

    }


    /* ======= Textrotator ======= */
    if ($('.rotate').length > 0) {
        $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 3000 // How many milliseconds until the next word show.
        });
    }


    /* ======= Revolution slider  homepage Creative======= */
    if ($('.tt-banner').length > 0) {
        jQuery(".tt-banner").revolution({
            delay: 10000,
            startwidth: 1170,
            startheight: 500,
            onHoverStop: "off",
            hideThumbs: 10,
            hideTimerBar: "on",
            navigationType: "none",
            navigationStyle: "preview1",
            fullWidth: "off",
            fullScreen: "on",
            fullScreenOffsetContainer: ""
        });
    }


    /* ======= Revolution slider  homepage Gallery======= */
    if ($('.tt-banner-gallery').length > 0) {
        jQuery(".tt-banner-gallery").revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 500,
            onHoverStop: "off",
            hideThumbs: 10,
            hideTimerBar: "on",
            navigationType: "none",
            navigationStyle: "preview1",
            fullWidth: "off",
            fullScreen: "on",
            fullScreenOffsetContainer: ""
        });
    }



    /* === Progress Bar === 
    if ($('.product').length > 0) {

        // detect block with progress bars
            var $section = $('.product');

            // animate progress
            function loadDaBars() {
                $(".progress").each(function() {
                    $(this)
                        .data("origWidth", $(this).width())
                        .width(0)
                        .animate({
                            width: $(this).data("origWidth")
                        }, 2000);
                });
            }

            $(document).bind('scroll', function() {
                var scrollOffset = $(document).scrollTop();
                var containerOffset = $section.offset().top - window.innerHeight;
                if (scrollOffset > containerOffset) {
                    loadDaBars();
                    // unbind event not to load bars again
                    $(document).unbind('scroll');
                }
            });
    }
*/
    /*Progress Bar Start*/

    $('.progress').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function() {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).off('inview');
        }
    });

    /*Progress Bar End*/



    /* === Counter === */
    $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });



    /* === factsTwo CountUp === */
    $('#factsTwo').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });



    /* === magnificPopup === */

    $('.tt-lightbox').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        fixedContentPos: false
        // other options
    });


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });




    /* === blogGrid === */
    if ($('#blogGrid').length > 0) {

        $('#blogGrid').masonry({
            // options
            itemSelector: '.blog-grid-item',
        });
    }



    /* ======= Recent Project Carousel ======= */
    (function() {

        var owl = $(".recent-project-carousel");

        owl.owlCarousel({
            items: 5, //5 items above 1000px browser width
            itemsDesktop: [1024, 4], //4 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 480
            itemsMobile: [479, 1], //1 item between 480 and 0
            pagination: false // Show pagination
        });


        // Custom Navigation Events
        $(".btn-next").on('click', function() {
            owl.trigger('owl.next');
        })
        $(".btn-prev").on('click', function() {
            owl.trigger('owl.prev');
        })


    }());


    /* ======= Partner Carousel ======= */
    (function() {

        var owl = $(".partner-carousel");

        owl.owlCarousel({
            items: 4, //5 items above 1000px browser width
            itemsDesktop: [1024, 4], //4 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 480
            itemsMobile: [479, 1], //1 item between 480 and 0
            pagination: false // Show pagination
        });

    }());




    /* ======= BlackAndWhite Script ======= */
    $('.bwWrapper').BlackAndWhite({
        hoverEffect: true, // default true
        // set the path to BnWWorker.js for a superfast implementation
        webworkerPath: false,
        // to invert the hover effect
        invertHoverEffect: false,
        // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
        intensity: 1,
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200, // 200ms for fadeIn animations
            fadeOut: 800 // 800ms for fadeOut animations
        },
        onImageReady: function(img) {
            // this callback gets executed anytime an image is converted
        }
    });


    /* ======= Testimonials ======= */

    /*(function () {

      var owl = $(".testimonials");
     
      owl.owlCarousel({
          items : 1, //5 items above 1000px browser width
          itemsDesktop : [1024,1], //4 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 480
          itemsMobile : [479,1], //1 item between 480 and 0
          pagination : false // Show pagination
      });


      // Custom Navigation Events
      $(".btn-next").on('click', function(){
        owl.trigger('owl.next');
      })
      $(".btn-prev").on('click', function(){
        owl.trigger('owl.prev');
      })


    }());*/

    (function() {

        var owl = $(".service-testm");

        owl.owlCarousel({
            items: 3, //5 items above 1000px browser width
            itemsDesktop: [1024, 3], //4 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 480
            itemsMobile: [479, 1], //1 item between 480 and 0
            fluidSpeed: true,
            loop: true,
            autoplayHoverPause: true,
            autoplayTimeout: 10,
            autoplaySpeed: 800,
            pagination: false, // Show pagination
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

        });


        // Custom Navigation Events
        $(".btn-next").on('click', function() {
            owl.trigger('owl.next');
        })
        $(".btn-prev").on('click', function() {
            owl.trigger('owl.prev');
        })


    }());
    $(".testimonials").owlCarousel({
        autoPlay: 5000,
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10,
        autoplaySpeed: 800,
        fluidSpeed: true,
        items: 1, //5 items above 1000px browser width
        itemsDesktop: [1024, 1], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        margin: 0,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".testimon").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10,
        autoplaySpeed: 800,
        fluidSpeed: true,
        items: 1, //5 items above 1000px browser width
        itemsDesktop: [1024, 1], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        margin: 0,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /* OWL-service slider  */
    $(".service-testm").owlCarousel({
        autoPlay: 5000,
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10,
        autoplaySpeed: 800,
        fluidSpeed: true,
        items: 3, //5 items above 1000px browser width
        itemsDesktop: [1024, 3], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        margin: 0,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* END - OWL-service slider  */

    /* ======= Testimonials ======= */

    /*b2b-b2c slider Start*/

    $("#owl-demo-logo-design").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10,
        autoplaySpeed: 800,
        fluidSpeed: true,
        items: 3, //5 items above 1000px browser width
        itemsDesktop: [1024, 3], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        margin: 0,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    /*b2b-b2c slider End*/

    /* ======= gallerySlider on homepage two ======= */

    if ($('#gallerySlider').length > 0) {

        $('#gallerySlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: true
        })
    }



    /* ======= client-slider-v3  ======= */

    if ($('.client-slider-v3').length > 0) {

        $('.client-slider-v3').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: true
        })
    }


    /* ======= client-slider-v4  ======= */

    if ($('.client-slider-v4').length > 0) {

        $('.client-slider-v4').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: true
        })
    }



    /* ======= Contact Form ======= */
    $('#contactForm').on('submit', function(e) {

        e.preventDefault();

        var $action = $(this).prop('action');
        var $data = $(this).serialize();
        var $this = $(this);

        $this.prevAll('.alert').remove();

        $.post($action, $data, function(data) {

            if (data.response == 'error') {

                $this.before('<div class="alert alert-danger">' + data.message + '</div>');
            }

            if (data.response == 'success') {

                $this.before('<div class="alert alert-success">' + data.message + '</div>');
                $this.find('input, textarea').val('');
            }

        }, "json");

    });



    /* ======= GOOGLE MAP ======= */

    if ($('#myMap').length > 0) {
        //set your google maps parameters
        var $latitude = 40.716304, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
            $longitude = -73.995763,
            $map_zoom = 16 /* ZOOM SETTING */

        //google map custom marker icon 
        var $marker_url = 'assets/images/pin.png';

        //we define here the style of the map
        var style = [{
            "stylers": [{
                "hue": "#000"
            }, {
                "saturation": -70
            }, {
                "gamma": 2.15
            }, {
                "lightness": 12
            }]
        }];

        //set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('myMap'), map_options);
        //add a custom marker to the map                
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url
        });

        var contentString = '<div id="mapcontent">' + '<p>69Studio, 795 Folsom Ave, San Francisco.</p></div>';
        var infowindow = new google.maps.InfoWindow({
            maxWidth: 320,
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

    }



    /*Security Code Start*/

    $(document).ready(function() {
        //Disable cut copy paste
        $('body').bind('cut copy ', function(e) {
            e.preventDefault();
        });

        //Disable mouse right click
        $("body").on("contextmenu", function(e) {
            return false;
        });

        $('body').on('dragstart', function() {
            return false;
        });
    });


    /*Security Code End*/


});

var wow = new WOW({
    offset: 100,
    mobile: false
});
wow.init();

$(window).load(function() {

    "use strict";


    /* ======= Stellar for background scrolling ======= */
    (function() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $(window).stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    }());


    /* ======= shuffle js ======= */
    if ($('#portfolio-grid').length > 0) {
        /* initialize shuffle plugin */
        var $grid = $('#portfolio-grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter li').on('click', function(e) {
            e.preventDefault();

            // set active class
            $('#filter li').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName);
        });
    }

    $('body').delegate('#overlay', 'click', function() {

        if ($('.switch').hasClass('active')) {
            $('.switch').trigger('click');
        }
    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 280) {

            $('.sideform').fadeIn();

        } else {

            $('.sideform').fadeOut();
            $('#overlay').stop(true, true).fadeOut();
        }

        if ($(this).scrollTop() > 300) {
            $('.proimg').animate({
                width: '80%'
            }, 6000, function() {
                $(this).closest('.prosec').find('h3').addClass('zoomIn');
            });
        }

    });

    $('.sideform .switch ').click(function() {

        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.sideform .switch i').addClass('active');
            $('.sideform').stop(true, true).animate({
                'right': 0
            }, 300);
            $('body').append('<div id="overlay" />');
            $('#overlay').fadeIn();
        } else {
            $('.sideform .switch i').removeClass('active');
            $('.sideform').stop(true, true).animate({
                'right': '-662px'
            }, 300, function() {
                $('#overlay').stop(true, true).fadeOut();
            });
        }
    });
    //Forms Validations

    $("#cform form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');
        }
    });

    $("#bnrform form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');
        }
    });
    $("#sdform form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');
        }
    });

    $("#popupform form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');

        }
    });
    $("#banform form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');

        }
    });

    $("#banform-desktop form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');

        }
    });

    $("#sideform form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');

        }
    });

    $("#main_popup form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');

        }
    });

    $("#placeorder form").validate({
        highlight: function(element) {
            $(element).parent('div').addClass('error');
            $(element).parent('div').prev('label').addClass('error2');
        },
        unhighlight: function(element) {
            $(element).parent('div').removeClass('error');
            $(element).parent('div').prev('label').removeClass('error2');

        }
    });
    /*Model form End*/


    $('.mcount').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.about-sec .nav-tabs li').click(function() {
        //alert('lkjlkj');
        setTimeout(function() {
            $(window).scrollTop($(window).scrollTop() + 1).scrollTop($(window).scrollTop() - 1);
        }, 0);


    });

    $('.brief .nav-tabs li').click(function() {
        //alert('lkjlkj');
        setTimeout(function() {
            $(window).scrollTop($(window).scrollTop() + 1).scrollTop($(window).scrollTop() - 1);
        }, 0);


    });

    $('.mission-tab .nav-tabs li').click(function() {
        //alert('lkjlkj');
        setTimeout(function() {
            $(window).scrollTop($(window).scrollTop() + 1).scrollTop($(window).scrollTop() - 1);
        }, 0);


    });



    /* When user clicks the Icon */
    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function() {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    $('a.nav-toggle').on('click', function(e) {
        $('html').add(this).toggleClass('no_scroll');
    });


    /*UP and Down */

    $(document).ready(function() {
        // get the number of .child elements
        var totalitems = $("#parent .child").length;
        // get the height of .child
        var scrollval = $('.child').height();
        // work out the total height.
        var totalheight = (totalitems * scrollval) - ($("#parent").height());

        $(document).on("click", "#down", function() {
            var currentscrollval = $('#parent').scrollTop();

            $('#parent').scrollTop(scrollval + currentscrollval);

            // hide/show buttons
            if (currentscrollval == totalheight) {
                $(this).hide();
            } else {
                $("#up").show();
            }
        });
        $(document).on("click", "#up", function() {
            var currentscrollval = parseInt($('#parent').scrollTop());

            $('#parent').scrollTop(currentscrollval - scrollval);

            // hide/show buttons
            if ((scrollval + currentscrollval) == scrollval) {
                $(this).hide();
            } else {
                $("#down").show();
            }
        });
    });
    /*UP and Down */

    /* OWL-HOME Project  */
    $(".project-rot").owlCarousel({
        autoPlay: 5000,
        navigation: true,
        navigationText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        itemsDesktop: [1170, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [700, 1],
        itemsMobile: [479, 1],
        margin: 0,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /* END - OWL-HOME Project  */




    /*LP Logos*/
    $("#lp-logos").owlCarousel({
        autoPlay: 2500,
        navigation: false,
        navigationText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        itemsDesktop: [1170, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [700, 1],
        itemsMobile: [479, 1],
        margin: 0,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*var owl45 = $("#lp-logos");            
    owl45.owlCarousel({
          items : 1,                         //10 items above 1000px browser width   
        loop:true,
      nav:false,
     autoplay: true,
     autoplayTimeout:1200,
  pagination  :false,
  dots:false,
  });*/
    /*LP Logos*/

    /*Lp Testi*/
    $("#owl-demo-lp-reviews").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        navigationText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        itemsDesktop: [1170, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [700, 1],
        itemsMobile: [479, 1],
        margin: 0,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*Lp Testi*/



    /*Lp professional Web Laptop */
    $("#owl-demo-laptop").owlCarousel({
        autoPlay: 3000,
        navigation: false,
        navigationText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        itemsDesktop: [1170, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [700, 1],
        itemsMobile: [479, 1],
        margin: 0,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*Lp professional Web Laptop*/


    /*Lp professional Web Iphone */
    $("#owl-demo-iphone").owlCarousel({
        autoPlay: 3000,
        navigation: false,
        navigationText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        itemsDesktop: [1170, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [700, 1],
        itemsMobile: [479, 1],
        margin: 0,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*Lp professional Web Iphone*/

    /*======== Isotope Filter Script =========*/

    var myTheme = window.myTheme || {},
        $win = $(window);

    myTheme.Isotope = function() {

        // 4 column layout
        var isotopeContainer = $(".isotopeContainer");
        if (!isotopeContainer.length || !jQuery().isotope) return;
        $win.load(function() {
            isotopeContainer.isotope({
                itemSelector: ".isotopeSelector"
            });
            $(".isotope-filter_links").on("click", "a", function(e) {
                $(".isotope-filter_links ul li").find(".active").removeClass("active");
                $(this).addClass("active");
                var filterValue = $(this).attr("data-filter");
                isotopeContainer.isotope({
                    filter: filterValue
                });
                e.preventDefault();
            });
        });

    };

    myTheme.Isotope();


    /* End Isotope Filter */

    // init cubeportfolio
    // $('#js-grid-awesome-work').cubeportfolio({
    //     filters: '#js-filters-awesome-work',
    //     loadMore: '#js-loadMore-awesome-work',
    //     loadMoreAction: 'click',
    //     layoutMode: 'grid',
    //     defaultFilter: '*',
    //     animationType: 'scaleSides',
    //     gapHorizontal: 0,
    //     gapVertical: 0,
    //     gridAdjustment: 'responsive',
    //     mediaQueries: [{
    //         width: 1500,
    //         cols: 4
    //     }, {
    //         width: 1100,
    //         cols: 4
    //     }, {
    //         width: 480,
    //         cols: 2
    //     }, {
    //         width: 320,
    //         cols: 1
    //     }],
    //     caption: 'zoom',
    //     displayType: 'lazyLoading',
    //     displayTypeSpeed: 400,

    //     // singlePage popup
    //     singlePageDelegate: '.cbp-singlePage',
    //     singlePageDeeplinking: true,
    //     singlePageStickyNavigation: true,
    //     singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
    //     singlePageCallback: function(url, element) {
    //         // to update singlePage content use the following method: this.updateSinglePage(yourContent)
    //         var t = this;

    //         $.ajax({
    //                 url: url,
    //                 type: 'GET',
    //                 dataType: 'html',
    //                 timeout: 10000
    //             })
    //             .done(function(result) {
    //                 t.updateSinglePage(result);
    //             })
    //             .fail(function() {
    //                 t.updateSinglePage('AJAX Error! Please refresh the page!');
    //             });
    //     },
    // });




    /*Modal open When site Load start*/


    /* $(window).on('load',function(){
        $('#onloadmodal').modal('show');
    }); */
    if ($('body').is('#page-top')) {

        setTimeout(function() {

            $('#onloadmodal').modal('show');
        }, 1000);

    }




});