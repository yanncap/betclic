(function($){

    $('.modal').hide();
    $('.modal2').hide();

    $('#validerParis').on('click', function () {
        $('.shadow, .modal').show();
    });

    $('.shadow').on('click', function () {
        $('.shadow, .modal, .modal2').hide();
    });

    $('.nul').on('click', function () {
        $('.shadow, .modal2').show();
    });

})(jQuery);

