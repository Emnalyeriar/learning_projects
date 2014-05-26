(function() {
    var sliderInt = 1,
        sliderNext = 2,
        startSlider = function() {
            count = $("#slider > img").size(),
            loop = setInterval(function() {
                if (sliderNext > count) {
                    sliderInt = sliderNext = 1;
                }
                $("#slider > img").fadeOut(300);
                $("#slider > img:nth-child("+sliderNext+")").fadeIn(300);
                sliderInt = sliderNext;
                sliderNext = sliderNext + 1;
            }, 3000);
        },
        prev = function() {
            var newSlide = sliderInt - 1;
            showSlide(newSlide);
        },
        next = function() {
            var newSlide = sliderInt + 1;
            showSlide(newSlide);
        },
        stopLoop = function() {
          clearInterval(loop);  
        },
        showSlide = function(id) {
            stopLoop();
            if (id > count) {
                id = 1;
            } else if (id < 1) {
                id = count;
            };
            $("#slider > img").fadeOut(300);
            $("#slider > img:nth-child("+id+")").fadeIn(300);
            sliderInt = id;
            sliderNext = id + 1;
            startSlider();
        };
    $(document).ready(function() {
        $('#slider > img:nth-child(1)').fadeIn(300);
        startSlider();
    });
    $(".left").on("click", function() {
        prev();
        event.preventDefault();
    });
    $(".right").on("click", function() {
        next();
        event.preventDefault();
    });
    $("#slider > img").on({
        mouseenter: function() {
            stopLoop();
        },
        mouseleave: function() {
            startSlider();
        }
    }); 
})();