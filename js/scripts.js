// Configuration Plugin lightbox
lightbox.option({
    showImageNumberLabel: false,
    positionFromTop: 100,
    maxWidth: 800,
    maxHeight: 600
});

// Search and Filter
let images = $('.gallery');
$('#phrase').on("keyup", function () {

    // Hide all the images
    $.each(images, function () {
        $(this).hide();
    });

    // We get the value in the text input
    let searchValue = $('#phrase').val();

    // Convert our input in a regular expression
    let searchValueRE = new RegExp(searchValue, "i");

    // Evaluate each image with our regular expression
    let output = $.grep(images, function (n) {
        return searchValueRE.test(n.childNodes[1].getAttribute('data-title'));
    });

    // Show all the images that passes the previous evaluation
    $.each(output, function () {
        $(this).fadeIn(600);
    });

});
