(function() {

var validation = {
    init: function() {
        $(this).blur(function(){
            if ( $(this).val() == "") { //if the input value is null 
                validation.addErrorStatus.call($(this));
            } else {
                validation.addOkStatus.call($(this));
                validation.checkMatch('email');
                validation.checkMatch('password');
            }
        });
    },
    addErrorStatus: function() {
            $(this).parent().addClass('has-error'); //then give the input parent - div an error class
            if ( $(this).parent().find('span.glyphicon').length ) {  //now we want to add an error icon but first we check if there alredy is one
                $(this).next().removeClass('glyphicon-ok');
                $(this).next().addClass('glyphicon-remove');
            } else {
                $('<span></span>', {
                    class: "glyphicon glyphicon-remove form-control-feedback"
                }).insertAfter($(this));
            };        
    },
    addOkStatus: function() {
            $(this).parent().removeClass('has-error'); //remove the error class from parent (div)
            $(this).next().removeClass('glyphicon-remove'); //remove error class from span
            if ( $(this).parent().find('span.glyphicon').length ) {
                $(this).next().addClass('glyphicon-ok'); //add ok class to span
            } else {
                $('<span></span>', {
                class: "glyphicon glyphicon-ok form-control-feedback"
            }).insertAfter($(this));
            }        
    },
    checkMatch: function(type) {
        var inputOne = $('#'+type+'1'),
            inputTwo = $('#'+type+'2');
        console.log(inputOne, inputTwo);
        $('#'+type+'1, #'+type+'2').keyup(function() {
            if (inputOne.val() === inputTwo.val()) {
                $('#'+type+'-status').text(type.toUpperCase()+'\'s match.')
                validation.addOkStatus.call(inputOne);
                validation.addOkStatus.call(inputTwo);
            } else {
                $('#'+type+'-status').text(type.toUpperCase()+'\'s doesn\'t match.')
                validation.addErrorStatus.call(inputOne);
                validation.addErrorStatus.call(inputTwo);
            }
        })
    }
}

validation.init.call($('input'));

})();