(function($){

    $('.modal').hide();

    $('#validerParis').on('click', function () {
        $('.shadow, .modal').show();
    });

    $('.shadow').on('click', function () {
        $('.shadow, .modal').hide();
    });

})(jQuery);

