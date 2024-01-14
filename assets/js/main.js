"use strict";


jQuery(document).ready(function($) {


    /*======== Preloader =========*/


    $(window).load(function() {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            "overflow": "visible"
        });

    });

    /* END of Preloader */

    $('a[data-toggle="modal"]').click(function() {

        $($(this).attr('data-target')).fadeIn('fast');
    });

    //get referer url

    $('input[name="ru"]').val(document.referrer);

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

    //open the discount on page load
    setTimeout(function() {
        $('.startform').animate({
            'height': '385px'
        }, 300);
        $('.startbutton').addClass('active');
    }, 8000);

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


    //jQuery is required to run this code
    $(document).ready(function() {

        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        $(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });

    });

    function scaleVideoContainer() {

        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height', unitHeight);

    }

    function initBannerVideoSize(element) {

        $(element).each(function() {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element) {

        var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;

        // console.log(windowHeight);

        $(element).each(function() {
            var videoAspectRatio = $(this).data('height') / $(this).data('width');

            $(this).width(windowWidth);

            if (windowWidth < 1000) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({
                    'margin-top': 0,
                    'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
                });

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }


    /*======= jQuery navbar on scroll =========*/


    $(window).scroll(function() {

        if ($(".navbar-default").add(".navbar-inverse").offset().top > 50) {
            $(".reveal-menu-home").addClass("top-nav-collapse");
            $(".reveal-menu-blog").addClass("top-nav-collapse-blog");
            $(".nav-container").css("border", "none");
        } else {
            $(".reveal-menu-home").removeClass("top-nav-collapse");
            $(".reveal-menu-blog").removeClass("top-nav-collapse-blog");
            $(".nav-container").css("border-bottom", "1px solid #6d6e6f");
        }
    });

    /* END Jquery to Collapse */


    /*======= Header Slider =========*/


    $(".carousel").carousel({
        interval: 6000,
    });

    /* End Header Slider */


    /*======== One Page Scrolling ======= */

    $("#navigation").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: "",
        easing: "swing",
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

    /* End One Page Scrolling */


    /* ======== Team Slider ========= */

    $("#team-items").owlCarousel({

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],

    });

    /* End Team Slider */

    /* ======== Testimonials Slider ========= */

    $("#testimonials-items").owlCarousel({

        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],

    });

    /* End Testimonials Slider */



    /* ========== Blog Slider ============ */

    $("#blog-items").owlCarousel({

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],

    });

    /* End Blog Slider */


    /*========= Fun and Facts Script ======== */

    try {
        $(".fun-facts_wrapper").appear(function() {
            $(".timer").countTo();
        });
    } catch (err) {


    }

    /* End Fun and Facts */


    /*======== Parallax Background =========*/

    $("#fun-facts").parallax("50%", 0.4);

    /* End Parallax Background */



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



    /*======== Fancy Box Init ========*/

    myTheme.Fancybox = function() {

        $(".fancybox-pop").fancybox({
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

        $(".various").fancybox({
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


    /*========= Masonry Grid Script ==========*/

    $(".grid-masonry").masonry({
        // options...
        itemSelector: ".grid-item",
        columnWidth: ".grid-item",

    });

    /* End Masonry Grid */


    /*======== Bounce Animation Script ========*/


    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked

        $(".img").on("click", function(e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });

        // handle the closing of the overlay
        $(".close-overlay").on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {

        // handle the mouseenter functionality
        $(".img").on("mouseenter", function() {
            $(this).addClass("hover");
            // handle the mouseleave functionality
        }).on("mouseleave", function() {
            $(this).removeClass("hover");
        });
    }

    /* End Bounce Animation */



});

//$('#interest_tabs li.first').addClass('active');
$('.bottom-tabs>li.first').addClass('active');
//$('#cid #cid_stationary').addClass('active');
$('#interest_tabs').on('click', 'a[data-toggle="tab"]', function(e) {
    e.preventDefault();
    var $link = $(this);
    if (!$link.parent().hasClass('active')) {
        //remove active class from other tab-panes
        $('.tab-content:not(.' + $link.attr('href').replace('#', '') + ') .tab-pane').removeClass('active');

        // activate tab-pane for active section

        $('.tab-content #' + $link.attr('href').replace('#', '') + ' ul li').removeClass('active');
        $('.tab-content #' + $link.attr('href').replace('#', '') + ' ul li.first').addClass('active');
        //        
        //        $('#'+ $link.attr('href').replace('#','') + ' .tab-pane').removeClass('active');
        //        $('#'+ $link.attr('href').replace('#','') + ' .tab-pane:first').addClass('active');

        // activate tab content

        console.log($('#' + $link.attr('href').replace('#', '') + ' .bottom-tabs li a[data-toggle="tab"]').attr('href').replace('#', ''));
        $('#' + $link.attr('href').replace('#', '') + ' .tab-pane').removeClass('active');
        $('#' + $link.attr('href').replace('#', '') + ' #' + $('#' + $link.attr('href').replace('#', '') + ' .bottom-tabs li a[data-toggle="tab"]').attr('href').replace('#', '')).addClass('active');


    }




});
/* end pricing page*/

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


$('.startbutton').click(function() {

    if (!$('.startbutton').hasClass('active')) {
        $('.startform').animate({
            'height': '385px'
        }, 300);
        $('.startbutton').addClass('active');

    } else {
        $('.startform').animate({
            'height': '0px'
        }, 800, function() {
            $('.startbutton').removeClass('active');
        });
    }

});



/*======== Init Google Map =========*/

//function initMap() {
//
//    // Specify features and elements to define styles.
//    var styleArray = [
//      {
//          featureType: "all",
//          stylers: [
//           { saturation: -80 }
//          ]
//      }, {
//          featureType: "road.arterial",
//          elementType: "geometry",
//          stylers: [
//            { hue: "#00ffee" },
//            { saturation: 50 }
//          ]
//      }, {
//          featureType: "poi.business",
//          elementType: "labels",
//          stylers: [
//            { visibility: "off" }
//          ]
//      }
//    ];
//
//    // Create a map object and specify the DOM element for display.
//    var map = new google.maps.Map(document.getElementById("map"), {
//        center: { lat: 31.4981, lng: 74.3044 }, // Change a map coordinate here!
//        scrollwheel: false,
//        // Apply the map style array to the map.
//        styles: styleArray,
//        zoom: 13
//    });
//}

/* End Google Map */