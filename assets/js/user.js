$(document).ready(function() {

    //Intialize the captcha
    const captcha = new Captcha($('#RecaptchCanvas'),{
        length: 4
    });

    //Refresh the captcha
    $('.btn-refresh-captch').on('click', function () {
        captcha.refresh();
    });

    //Validate the contact form
    $("#frm_contact_form").validate({
        rules: {
            name: "required",
            company_name: "required",
            state_city: "required",
            email: {
                required: true,
                email: true
            },
            security_services: "required",
            captcha_verify: "required"
        },
        submitHandler: function(form) {
            //check that captcha is valid OR not
            const captchVal = captcha.valid($('input[name="captcha_verify"]').val());
            
            if(captchVal == false) {
                //captcha.refresh();
                $('#captcha_verify_error').html('Please enter valid code.');
                $('#captcha_verify_error').css('display', 'block');
                return false;
            } else {
                $('#captcha_verify_error').html('');
                $('#captcha_verify_error').css('display', 'none');
            }

            //Form Submit Event
            $(form).ajaxSubmit({
                type: "post",
                url: 'controllers/contact.php',
                dataType: 'json',
                beforeSend: function() {
                    $("#btn_contact_submit").attr('disabled', true);
                    $("#btn_contact_submit").html("Sending");
                },
                success: function(response) {
                    //Set the form tag
                    $("#btn_contact_submit").attr('disabled', false);
                    $("#btn_contact_submit").html("Send");

                    if (response.status == true) {
                        $("#frm_contact_form")[0].reset();
                        $('.alert-success').removeClass('d-none');
                    } else {
                        //Reload the captcha
                        captcha.refresh();
                        $('.alert-danger').removeClass('d-none');
                    }
                }
            });
        }
    });

});
