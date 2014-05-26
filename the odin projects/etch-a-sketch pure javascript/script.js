(function() {
    var divNumber = 50,
        main = document.getElementsByClassName("main"),
        generate = function(divNumber) {
            while (main[0].firstChild) {
                main[0].removeChild(main[0].firstChild);
            };
            for (var j=1; j<=divNumber; j++) {
                for (var i=1; i <= divNumber; i++) {
                    var divs = document.createElement("div");
                    divs.style.width = divs.style.height = (960/divNumber)+'px';
                    main[0].appendChild(divs);
                };
            };
        },
        persistent = function() {
            var divs = main[0].getElementsByTagName("div");
            for (var i=0, l=divs.length; i < l; i++) {
                divs[i].onmouseover = function() {
                    this.style.backgroundColor="black";
                };
            }        
        },
        random = function () {
            return Math.floor(Math.random() * 256);
        },
        color = function() {
            var divs = main[0].getElementsByTagName("div");
            for (var i=0, l=divs.length; i < l; i++) {
                divs[i].onmouseover = function() {
                    this.style.backgroundColor="rgb("+random()+","+random()+","+random()+")";
                };
            }        
        },
        fading = function() {
            var divs = main[0].getElementsByTagName("div");
            for (var i=0, l=divs.length; i < l; i++) {
                divs[i].onmouseover = function() {
                    this.style.backgroundColor="black";
                    var that = this;
                    setTimeout(function() {
                        that.style.backgroundColor="white";
                    }, 200);
                };
            }               
        },
        slowly = function() {
            var divs = main[0].getElementsByTagName("div");
            for (var i=0, l=divs.length; i < l; i++) {
                divs[i].onmouseover = function() {
                    this.style.backgroundColor="black";
                    opacity =  parseFloat(window.getComputedStyle(this, null).getPropertyValue("opacity"));
                    if (opacity < .1) {
                        this.style.opacity = 0;   
                    } else {
                    this.style.opacity = opacity - .1;
                    };
                };
            };
        };
    document.getElementById("size").onclick = function() {
        divNumber = prompt('Size 1-100', 50);
        generate(divNumber);
    };
    document.getElementById("black").onclick = function() { persistent(); };
    document.getElementById("color").onclick = function() { color(); };
    document.getElementById("fading").onclick = function() { fading(); };
    document.getElementById("slowly").onclick = function() { slowly(); };
    onload = generate(divNumber);
    onload = persistent();
})();