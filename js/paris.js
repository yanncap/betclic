(function($){

    function init(){
        $('#miseInput').val("");
    }

    $('#validerParis').on('click', function (){displayParisSelected()});

    $('.shadow').on('click', function () {
        $('.shadow, .modal').hide();
        $('#miseInput').val("");
    });

    $('.vic a').on('click', function(){
        console.log("valeur de la cote : " + $(this).html());
        $('#cote').html($(this).html());
        var findMatchDescription = $(this).parents('.ligneParis').find(".infoParis p:nth-child(2)");
        console.log("valeur du match : " + $(findMatchDescription).html()/* $(' .infoParis p:nth-child(2)').html()*/);
        $('#selectedMatch').html($(findMatchDescription).html());
        $('.shadow, .modal').show();
    });

    $('#miseInput').on('input', function(){calculGain()})


    $('#validerParis').on('click', function () {
        if(!userCoo){
            $('#parisValide').addClass('colorInformation').html('Vous devez vous connecter pour parier !')
        }
        else{
            $('#parisValide').addClass('colorInformation').html('Votre paris a bien été pris en compte')
        }
    })

})(jQuery);



function calculGain(){
    var gains = Number($('#cote').html()) * Number($('#miseInput').val());
    $('#gainPoentiels').html(gains.toFixed(2));
}

function displayParisSelected(){
    $('.shadow, .modal').show();
}