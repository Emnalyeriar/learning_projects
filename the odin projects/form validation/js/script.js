(function() {

var validation = {
    init: function() {
        $(this).blur(function(){
            if ( $(this).val() == "") { //if the input value is null 
                $(this).parent().addClass('has-error'); //then give the input parent - div an error class
                if ( $(this).parent().find('span.glyphicon').length ) {  //now we want to add an error icon but first we check if there alredy is one
                    $(this).next().removeClass('glyphicon-ok');
                    $(this).next().addClass('glyphicon-remove');
                } else {
                    $('<span></span>', {
                        class: "glyphicon glyphicon-remove form-control-feedback"
                    }).insertAfter($(this));
                };
            } else {
                $(this).parent().removeClass('has-error'); //remove the error class from parent (div)
                $(this).next().removeClass('glyphicon-remove'); //remove error class from span
                if ( $(this).parent().find('span.glyphicon').length ) {
                    $(this).next().addClass('glyphicon-ok'); //add ok class to span
                } else {
                    $('<span></span>', {
                    class: "glyphicon glyphicon-ok form-control-feedback"
                }).insertAfter($(this));
                }
            }
        });
    }
}

validation.init.call($('input'));

})();