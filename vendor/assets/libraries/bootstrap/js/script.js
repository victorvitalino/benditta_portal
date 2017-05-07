/*

1. PARALLAX
2. STICK MENU (ADD CLASS FOR MAINMENU WHEN SCROLLER)
3. DROPDOWN - MAIN NAVIGATION
4. TOOLTIP
5. SLIDER 1 - HOMEPAGE
6. SLIDER 2 - SHORTCODES - FADE ANIMATION WITH INDICATOR
7. SLIDER 3 - SHORTCODES - AUTO SLIDE ANIMATION
8. SLIDER 4 - SHORTCODES - RANDOM SLIDER WITH TIMER 
9. SLIDER 5 - SHORTCODES - TEXT SLIDE WITH NAVIGATION ARROW
10. NOUISLIDER 1 (JQUERY SLIDER RANGE) - PRICE SLIDER RANGE
11. NOUISLIDER 2 (JQUERY SLIDER RANGE) - AREA SLIDER RANGE
12. CALENDAR
13. JQUERY APPEAR
14. JPLAYER AUDIO 1 (ARTICLE - BLOG PAGE)
15. JPLAYER VIDEO 1 (HORIZONTAL TAB - SHORTCODES PAGE)
16. ACCORDION - SHORTCODE
17. TOGGLE  - SHORTCODES
18. HORIZONTAL TAB - SHORTCODES
19. VERTICAL TAB - SHORTCODES
20. COUNTER - SHORTCODES
21. EDITOR WYSIHTML5
22. CHANGE YOUR PACKAGE (SUBMIT PROPRETY PAGE)
23. BACK TO TOP BUTTON

*/



! function($) {
  $(document).ready(function() {
    // Cache the Window object
    $window = $(window);

    /* --------------------------------------------------------------------- */
    /* 1. PARALLAX
    /* --------------------------------------------------------------------- */
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    testMobile = isMobile.any();

    if (testMobile == null && $('.parallax .bg') != undefined) {
      $('.parallax .bg').parallax("50%", 0.3);
    }



    /* --------------------------------------------------------------------- */
    /* 2. STICK MENU (ADD CLASS FOR MAINMENU WHEN SCROLLER)
    /* --------------------------------------------------------------------- */ 
    (function() {

      var mainnav = $('.noo-header');
      var elmHeight = $('.top-header').outerHeight(true);

      if (mainnav.length) {
        var elmHeight = $('.top-header').outerHeight(true);
        $(window).scroll(function() {

          var scrolltop = $(window).scrollTop();
          if (scrolltop > elmHeight) {
            if (!mainnav.hasClass('affix')) {
              mainnav.addClass('affix');
            }

          } else {
            mainnav.removeClass('affix');
          }
        })
      }
    })();



    /* --------------------------------------------------------------------- */
    /* 3. DROPDOWN - MAIN NAVIGATION
    /* --------------------------------------------------------------------- */
    (function() {
      $('.main-navigation .dropdown').on({
        mouseenter : function() {
          $(this).addClass('open');
        },
        mouseleave : function() {
          $(this).removeClass('open');
        }
      });

      $('.main-navigation .dropdown-submenu').on({
        mouseenter : function() {
          $(this).addClass('open');
        },
        mouseleave : function() {
          $(this).removeClass('open');
        }
      });
    })();
    



    /* --------------------------------------------------------------------- */
    /* 4. TOOLTIP
    /* --------------------------------------------------------------------- */
    (function() {
      if($('[data-toggle="tooltip"]').length){
        $('[data-toggle="tooltip"]').tooltip();
      }
    })();



    /* --------------------------------------------------------------------- */
    /* 5. SLIDER 1 - HOMEPAGE
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-slider-1 .sliders').length){
        $('#noo-slider-1 .sliders').carouFredSel({
          infinite: true,
          circular: true,
          responsive: true,
          debug: false,
          scroll: {
            items: 1,
            duration: 600,
            pauseOnHover: "resume",
            fx: "scroll"
          },

          auto: {
            timeoutDuration: 3000,
            progress: {
              bar: "#noo-slider-1-timer"
            },
            play: false
          },

          pagination: {
            container: "#noo-slider-1-pagination"
          },

          prev: {
            button: "#noo-slider-1-prev"
          },

          next: {
            button: "#noo-slider-1-next"
          },

          swipe: {
            onTouch: true,
            onMouse: true
          }
        });
      }
    })();
      


    /* --------------------------------------------------------------------- */
    /* 6. SLIDER 2 - SHORTCODES - FADE ANIMATION WITH INDICATOR
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-slider-2 .sliders').length){
        $('#noo-slider-2 .sliders').carouFredSel({
          infinite: true,
          circular: true,
          responsive: true,
          debug: false,
          items: {
            start: 0
          },

          scroll: {
            items: 1,
            duration: 600,
            fx: "fade"
          },

          auto: {
            timeoutDuration: 3000,
            play: true
          },

          pagination: {
            container: "#noo-slider-2-pagination"
          },

          swipe: {
            onTouch: true,
            onMouse: true
          }
        });
      }
    })();
      

    
    /* --------------------------------------------------------------------- */
    /* 7. SLIDER 3 - SHORTCODES - AUTO SLIDE ANIMATION
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-slider-3 .sliders').length){
        $('#noo-slider-3 .sliders').carouFredSel({
          infinite: true,
          circular: true,
          responsive: true,
          debug: false,
          items: {
            start: 0
          },

          scroll: {
            items: 1,
            duration: 600,
            pauseOnHover: "resume",
            fx: "scroll"
          },

          auto: {
            timeoutDuration: 3000,
            play: true
          },

          swipe: {
            onTouch: true,
            onMouse: true
          }
        });
      }
    })();
      


    /* --------------------------------------------------------------------- */
    /* 8. SLIDER 4 - SHORTCODES - RANDOM SLIDER WITH TIMER 
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-slider-4 .sliders').length){
        $('#noo-slider-4 .sliders').carouFredSel({
          infinite: true,
          circular: true,
          responsive: true,
          debug: false,
          items: {
            start: "random"
          },

          scroll: {
            items: 1,
            duration: 600,
            pauseOnHover: "resume",
            fx: "scroll"
          },

          auto: {
            timeoutDuration: 3000,
            progress: {
              bar: "#noo-slider-4-timer"
            },
            play: true
          },

          pagination: {
            container: "#noo-slider-4-pagination"
          },

          swipe: {
            onTouch: true,
            onMouse: true
          }
        });
      }
    })();
      

    
    /* --------------------------------------------------------------------- */
    /* 9. SLIDER 5 - SHORTCODES - TEXT SLIDE WITH NAVIGATION ARROW
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-slider-5 .sliders').length){
        $('#noo-slider-5 .sliders').carouFredSel({
          infinite: true,
          circular: true,
          responsive: true,
          debug: false,
          items: {
            start: 0
          },

          scroll: {
            items: 1,
            duration: 600,
            pauseOnHover: "resume",
            fx: "scroll"
          },

          auto: {
            timeoutDuration: 3000,
            play: false
          },

          prev: {
            button: "#noo-slider-5-prev"
          },

          next: {
            button: "#noo-slider-5-next"
          },

          swipe: {
            onTouch: true,
            onMouse: true
          }
        });
      }
    })();
      

    
    /* --------------------------------------------------------------------- */
    /* 10. NOUISLIDER 1 (JQUERY SLIDER RANGE) - PRICE SLIDER RANGE
    /* --------------------------------------------------------------------- */
    (function() {
      if($('.gprice-slider-range').length){
        $(".gprice-slider-range").noUiSlider({
          start: [200, 11000000],
          range: {
            'min': 200,
            'max': 11000000
          },
          step: 1,
          format: wNumb({
            decimals: 0,
            thousand: '.',
            prefix: '&#36;'
          }),
          connect: true
        });

        $(".gprice-slider-range").Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
          $(this).html(
            '<span>' + value + '</span>'
          );
        });

        $(".gprice-slider-range").Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {
          $(this).html(
            '<span>' + value + '</span>'
          );
        });
      }
    })();



    /* --------------------------------------------------------------------- */
    /* 11. NOUISLIDER 2 (JQUERY SLIDER RANGE) - AREA SLIDER RANGE
    /* --------------------------------------------------------------------- */
    (function() {
      if($('.garea-slider-range').length){
        $(".garea-slider-range").noUiSlider({
          start: [200, 11000000],
          range: {
            'min': 200,
            'max': 11000000
          },
          step: 1,
          format: wNumb({
            decimals: 0,
            thousand: '.',
            prefix: '&#36;'
          }),
          connect: true
        });

        $(".garea-slider-range").Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
          $(this).html(
            '<span>' + value + '</span>'
          );
        });

        $(".garea-slider-range").Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {
          $(this).html(
            '<span>' + value + '</span>'
          );
        });
      }
    })();


    
    /* --------------------------------------------------------------------- */
    /* 12. CALENDAR
    /* --------------------------------------------------------------------- */
    (function() {
      if($('.datepicker').length){
        $('.datepicker').datepicker({
          format: 'mm/dd/yyyy',
          todayHighlight: true
        });
      }
    })();
      

    
    /* --------------------------------------------------------------------- */
    /* 13. JQUERY APPEAR
    /* --------------------------------------------------------------------- */
    (function() {
      if($('.animatedParent').length){
        $('.animatedParent').appear(function() {
          var ele = $(this).find('.animated');
          var parent = $(this);
          ele.addClass('go');
        });
      }
    })();


    
    /* --------------------------------------------------------------------- */
    /* 14. JPLAYER AUDIO 1 (ARTICLE - BLOG PAGE)
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#jplayer-audio-1').length){
        $("#jplayer-audio-1").jPlayer({
          ready: function () {
            $(this).jPlayer("setMedia", {
              title: "Bubble",
              m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
              oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            });
          },
          cssSelectorAncestor: "#jplayer-interface-audio-1",
          swfPath: "/js",
          supplied: "m4a, oga"
        });
      }
    })();


    
    /* --------------------------------------------------------------------- */
    /* 15. JPLAYER VIDEO 1 (HORIZONTAL TAB - SHORTCODES PAGE)
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#jplayer-video-1').length){
        $('#jplayer-video-1').jPlayer({
          ready: function() {
            $(this).jPlayer('setMedia', {
              m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v'
            })
          },
          size: {
            width: '100%',
            height: '100%'
          },
           swfPath: '../js/jplayer',
          cssSelectorAncestor: '#jplayer-interface-video-1',
          supplied: 'm4v,'
        });
      }
    })();
    

    
    /* --------------------------------------------------------------------- */
    /* 16. ACCORDION - SHORTCODE
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-accordion-1').length){
        $('#noo-accordion-1 .panel-title a').attr('data-parent', '#noo-accordion-1');
        $('#noo-accordion-1 .noo-accordion-tab:eq(0)').addClass('in');
        $('#noo-accordion-1').on('show.bs.collapse', function(e) {
          $(e.target).prev('.panel-heading').addClass('active');
        });
        $('#noo-accordion-1').on('hide.bs.collapse', function(e) {
          $(e.target).prev('.panel-heading').removeClass('active');
        });
        $('#noo-accordion-1 .in').prev('.panel-heading').addClass('active');
      }
    })();


    
    /* --------------------------------------------------------------------- */
    /* 17. TOGGLE  - SHORTCODES
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-accordion-2').length){
        $('#noo-accordion-2 .panel-title a').attr('data-parent', '#noo-accordion-2');
        $('#noo-accordion-2 .noo-accordion-tab:eq(0)').addClass('in');
        $('#noo-accordion-2').on('show.bs.collapse', function(e) {
          $(e.target).prev('.panel-heading').addClass('active');
        });
        $('#noo-accordion-2').on('hide.bs.collapse', function(e) {
          $(e.target).prev('.panel-heading').removeClass('active');
        });
        $('#noo-accordion-2 .in').prev('.panel-heading').addClass('active');
      }
    })();



    /* --------------------------------------------------------------------- */
    /* 18. HORIZONTAL TAB - SHORTCODES
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-tabs-1').length){
        $('#noo-tabs-1 a:eq(0)').tab('show');
      }
    })();


    
    /* --------------------------------------------------------------------- */
    /* 19. VERTICAL TAB - SHORTCODES
    /* --------------------------------------------------------------------- */
    (function() {
      if($('#noo-tabs-2').length){
        $('#noo-tabs-2 a:eq(0)').tab('show');
      }
    })();



    /* --------------------------------------------------------------------- */
    /* 20. COUNTER - SHORTCODES
    /* --------------------------------------------------------------------- */
    (function() {
      if($('.noo-counter').length){
        $('.noo-counter').appear( function() {
          $this = jQuery(this);
          $this.parent().css('opacity', '1');
          var $max = parseFloat($this.text());
          $this.countTo({
            from: 0,
            to: $max,
            speed: 1500,
            refreshInterval: 100
          });
        });
      }
    })();

    

    /* --------------------------------------------------------------------- */
    /* 21. EDITOR WYSIHTML5
    /* --------------------------------------------------------------------- */
    (function() {
      if($('.s-prop-desc textarea').length){
        $('.s-prop-desc textarea').wysihtml5({
          "font-styles": false,
          "blockquote": false,
          "emphasis": true,
          "lists": true,
          "html": false,
          "link": true,
          "image": true,
          "color": false
        });
      }
    })();



    /* --------------------------------------------------------------------- */
    /* 22. CHANGE YOUR PACKAGE (SUBMIT PROPRETY PAGE)
    /* --------------------------------------------------------------------- */
    (function() {
      if($('.checkbox-label').length){
        $('.checkbox-label').on( "click", function(){
          if($('#recurring_payment').is(':checked')){
            $('.recurring_time').show();
          }
          else
          {
            $('.recurring_time').hide();
          }
        });
      }
    })();


    
    /* --------------------------------------------------------------------- */
    /* 23. BACK TO TOP BUTTON
    /* --------------------------------------------------------------------- */
    (function() {
      $('.back-to-top').on( "click", function( event ) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 'slow');
        return false;
      });
    })();

  });
}(jQuery);

