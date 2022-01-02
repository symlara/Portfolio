




// code for top of page button
// scroll to top when arrow is clicked 
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 10) {
        $('#myBtn').fadeIn();
    }else {
        $('#myBtn').fadeOut();
    }
});

$(document).ready(function() {
    $('#myBtn').click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0}, "slow")
        return false;
    });
});