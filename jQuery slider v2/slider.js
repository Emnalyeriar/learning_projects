(function($) {

    function Slider() {
        
        this.container = $('.slider');
        this.imgs = this.container.find('img');
        this.height = this.imgs[0].height;
        this.width = this.imgs[0].width;
        this.length = this.imgs.length;
        this.current = 1;
        this.speed = 5001;
        var slider = this;
        
        this.container.css({
            'width': this.width,
            'margin': '0 auto',
            'overflow': 'hidden',
            'position': 'relative'
        });
        this.container.find('ul').css({
            'list-style': 'none',
            'margin': '0',
            'padding': '0',
            'width': '100000px'
        });
        this.container.find('ul li').css('float', 'left');
        
        $('<a></a>',{
            href: '#',
            text: '<',
            class: 'prev'
        }).prependTo(this.container).css({
            'display': 'inline-block',
            'position': 'absolute',
            'width': '25px',
            'height': '50px',
            'line-height': '50px',
            'font-size': '20px',
            'font-weight': '800',
            'background-color': '#000',
            'color': '#fff',
            'opacity': '.5',
            'text-align': 'center',
            'text-decoration': 'none',
            'border-radius': '0 30px 30px 0',
            'top': (this.height/2)-25
        });
        $('<a></a>',{
            href: '#',
            text: '>',
            class: 'next'
        }).prependTo(this.container).css({
            'display': 'inline-block',
            'position': 'absolute',
            'width': '25px',
            'height': '50px',
            'line-height': '50px',
            'font-size': '20px',
            'font-weight': '800',
            'background-color': '#000',
            'color': '#fff',
            'opacity': '.5',
            'text-align': 'center',
            'text-decoration': 'none',
            'border-radius': '30px 0 0 30px',
            'top': (this.height/2)-25,
            'right': '0'
        });
        
        for (var i=0;i<this.length;i++) {
            $('<div></div>').insertBefore($('.next')).css({
                'display': 'inline-block',
                'position': 'absolute',
                'width': '20px',
                'height': '20px',
                'border-radius': '50px',
                'background-color': '#fff',
                'opacity': '.5',
                'transition': 'background-color .5s ease',
                'top': this.height-50,
                'left': (this.width/2)-20*(this.length/2)+20*i
            });
        }
        
        $('<span></span>').insertBefore($('.next')).css({
            'display': 'inline-block',
            'position': 'absolute',
            'width': '0',
            'height': '5px',
            'background-color': '#000',
            'opacity': '.2',
            'bottom': '5px'
        });
        
        $('.slider span').animate({
            'width': this.width
        }, slider.speed);
        
        $('.slider div:nth-child('+this.current+')').css('background-color', '#000');
        
        this.loop = function() {
            ( $(this).text() === '<' ) ? slider.current-=1 : slider.current+=1;
            ( slider.current === 0 ) ? slider.current = slider.length : slider.current;
            ( slider. current === slider.length+1 ) ? slider.current = 1 : slider.current;
            $('.slider ul').animate({
                'margin-left': (slider.current-1)*slider.width*-1
            });
            $('.slider span').stop();
            $('.slider span').css({
                'width': 0
            });
            $('.slider span').animate({
                'width': slider.width
            }, slider.speed, 'linear');
            $('.slider div').css('background-color', '#fff');
            $('.slider div:nth-child('+slider.current+')').css('background-color', '#000');
        }
        
        var interval = setInterval(function(){
            slider.loop();
        }, this.speed);
        
        $('.slider a').on('click', function(e){
            e.preventDefault;
            clearInterval(interval);
            slider.loop();
            interval = setInterval(function(){
                slider.loop();
            }, slider.speed);
        });
        

    }
    $(window).on('load', function() {
        var slider = new Slider ();
    });
})(jQuery);