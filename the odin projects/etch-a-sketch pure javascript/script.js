(function() {
    var divNumber = 50,
        main = document.getElementsByClassName("main"),
        generate = function(divNumber) {
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
        };
    console.log(main);
    window.onload = generate(divNumber);
    window.onload = persistent();
})();