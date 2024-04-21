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

$(document).ready(function () {
    if (!localStorage.getItem('cookiePopupDisplayed') || localStorage.getItem('cookiePopupDisplayed') !== getCurrentDate()) {
        $('#cookiePopup').fadeIn();
    }
});
$('#cookiePopup .close').click(function () {
    $('#cookiePopup').fadeOut();
});

$('#acceptCookiesBtn').click(function () {
    $('#cookiePopup').fadeOut();
    localStorage.setItem('cookiePopupDisplayed', getCurrentDate());
});

function getCurrentDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var day = String(today.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}
