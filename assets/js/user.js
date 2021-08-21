$(document).ready(function() {

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
            //captcha_verify: "required"
        },
        submitHandler: function(form) {
            
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
                        alert('Successfully send');
                    } else {
                       alert('Error in sending');
                    }
                }
            });
        }
    });
});