(function () {

    var buttons = document.querySelectorAll(".button span"),
        printResult = document.querySelectorAll(".result span"),
        start = false,
        diff = [],
        click = 0,
        lightUp = function () {
            var code = event.charCode;
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                click = click + 1;
                for (var i = 0, l = buttons.length; i < l; i++) {
                    if ((code == buttons[i].innerHTML.charCodeAt(0)) || (code === buttons[i].innerHTML.toLowerCase().charCodeAt(0))) {
                        buttons[i].parentNode.className = "buttonPressed";
                        var fadeOut = function(j) {
                            setTimeout(function() { buttons[j].parentNode.className = "button";}, 500);
                        }
                        fadeOut(i);
                    }
                }
            };
            if (start === false) {
                start = true;
                timer = new Date();
            } else {
                timerNew = new Date();
                if ((timerNew-timer) >= 1000) {
                    result = (click/1);
                    start = false;
                    click = 0;
                    printResult[0].innerHTML =  result;
                }
            }
        };
    window.onload = document.getElementById('form').select();
    document.addEventListener("keypress", lightUp, false);

}());