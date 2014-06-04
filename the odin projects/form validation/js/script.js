(function() {

var validation = {
    init: function() {
        validation.validateEmail();
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
        $('#'+type+'1, #'+type+'2').keyup(function() {  //chech if equal on each keyup
            if (inputOne.val() === inputTwo.val()) {
                $('#'+type+'2-status').text(' ')
                validation.addOkStatus.call(inputTwo); //if match adds ok status
            } else {
                $('#'+type+'2-status').text('This does not match the '+type+' entered above.')  //if emails do not match displays error text and sets error status
                validation.addErrorStatus.call(inputTwo);
            }
        })
    },
    validateEmail: function() {
        var email = $('#email1'),
            re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        email.blur(function() {  //check if email is right when input losses focus
            if (email.val() == '' || !re.test(email.val())) {
                validation.addErrorStatus.call(email);   //if email is wrong add error status and show error text
                $('#email1-status').text('Please use a valid email address.');
            } else {
                validation.addOkStatus.call(email);
                $('#email1-status').text(' ');
                validation.checkMatch('email'); //if the email is ok set ok status, delete error text if there was one and run the function that checks if the second email matches the first one
            }
        });
    }
}

validation.init();

})();