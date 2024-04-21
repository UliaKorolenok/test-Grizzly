$(document).ready(function () {
    $('#phoneForm').submit(function (event) {
        event.preventDefault();
        var phoneNumber = $('#phone').val();
        $.ajax({
            url: 'checkPhone.php',
            type: 'POST',
            data: {
                phone: phoneNumber
            },
            success: function (response) {
                $('#result').html(response);
            }
        });
    });
    
});
