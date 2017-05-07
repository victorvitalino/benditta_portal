/*

1. RECENT PROPERTIES SLIDER
2. RECENT AGENTS SLIDER
3. RECENT PROPERTIES FEATURED SLIDER
4. CAROUFREDSEL THUMBNAILS SLIDER (PROPERTY DETAILS PAGE)

*/



jQuery(document).ready(function(a) {
  /* --------------------------------------------------------------------- */
  /* 1. RECENT PROPERTIES SLIDER
  /* --------------------------------------------------------------------- */
  a(".recent-properties-slider").each(function() {
    var d = a(this);
    var c = {
      responsive: true,
      circular: false,
      infinite: true,
      auto: {
        play: false,
        pauseOnHover: true
      },
      prev: d.find(".caroufredsel-prev"),
      next: d.find(".caroufredsel-next"),
      swipe: {
        onTouch: true
      },
      scroll: {
        items: 1,
        duration: 600,
        fx: "scroll",
        timeoutDuration: 2000,
        easing: "swing"
      },
      items: {
        visible: 1
      }
    };
    d.find("ul").carouFredSel(c);
    imagesLoaded(d, function() {
      d.find("ul").trigger("updateSizes")
    });
    a(window).resize(function() {
      d.find("ul").trigger("destroy").carouFredSel(c)
    })
  });



  /* --------------------------------------------------------------------- */
  /* 2. RECENT AGENTS SLIDER
  /* --------------------------------------------------------------------- */
  a(".recent-agents-slider").each(function() {
    var d = a(this);
    var c = {
      responsive: true,
      circular: true,
      infinite: true,
      auto: {
        play: false,
        pauseOnHover: true
      },
      prev: d.find(".caroufredsel-prev"),
      next: d.find(".caroufredsel-next"),
      mousewheel: true,
      swipe: {
        onMouse: true,
        onTouch: true
      },
      scroll: {
        items: null,
        duration: 600,
        fx: "scroll",
        timeoutDuration: 2000,
        easing: "swing"
      },
      items: {
        height: "variable",
        visible: {
          min: 1,
          max: 3
        }
      }
    };
    d.find("ul").carouFredSel(c);
    imagesLoaded(d, function() {
      d.find("ul").trigger("updateSizes")
    });
    a(window).resize(function() {
      d.find("ul").trigger("destroy").carouFredSel(c)
    })
  });

  

  /* --------------------------------------------------------------------- */
  /* 3. RECENT PROPERTIES FEATURED SLIDER
  /* --------------------------------------------------------------------- */
  a(".recent-properties-featured").each(function() {
    var d = a(this);
    var c = {
      responsive: true,
      circular: false,
      infinite: true,
      auto: {
        play: false,
        pauseOnHover: true
      },
      prev: d.find(".caroufredsel-prev"),
      next: d.find(".caroufredsel-next"),
      swipe: {
        onTouch: true
      },
      scroll: {
        items: 1,
        duration: 600,
        fx: "scroll",
        timeoutDuration: 2000,
        easing: "swing"
      },
      width: "100%",
      height: "variable",
      items: {
        height: "variable",
        visible: 1
      }
    };
    d.find("ul").carouFredSel(c);
    imagesLoaded(d, function() {
      d.find("ul").trigger("updateSizes")
    });
    a(window).resize(function() {
      d.find("ul").trigger("destroy").carouFredSel(c)
    })
  });



  /* --------------------------------------------------------------------- */
  /* 4. CAROUFREDSEL THUMBNAILS SLIDER (PROPERTY DETAILS PAGE)
  /* --------------------------------------------------------------------- */
  function caroufredselImage() {
    if($('.property-featured .images').length){
      $(".property-featured .images .caroufredsel-wrap ul").carouFredSel({
        responsive: true,
        auto: {
          play: false,
          pauseOnHover: true
        },
        pagination: {
          container: ".thumbnails .thumbnails-wrap ul",
          anchorBuilder: false
        }
      });
    }
  }
  $(".property-featured .images .caroufredsel-wrap ul").imagesLoaded(caroufredselImage);

  function caroufredselThumbnail() {
    if($('.property-featured .thumbnails').length){
      $(".property-featured .thumbnails .thumbnails-wrap ul").carouFredSel({
        responsive: true,
        circular: false,
        infinite: true,
        auto: {
          play: false,
          pauseOnHover: true
        },
        prev: ".property-featured .thumbnails .caroufredsel-prev",
        next: ".property-featured .thumbnails .caroufredsel-next",
        swipe: {
          onMouse: true,
          onTouch: true
        },
        scroll: {
          items: 1,
          duration: 600,
          fx: "scroll",
          timeoutDuration: 2000,
          easing: "swing"
        },
        width: "100%",
        height: "variable",
        items: {
          height: "auto",
          width: 138,
          visible: {
            min: 1,
            max: 5
          }
        }
      });
    }
  }
  $(".property-featured .thumbnails .thumbnails-wrap ul").imagesLoaded(caroufredselThumbnail);


});

