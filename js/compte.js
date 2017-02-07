/**
 * Created by formation on 07/02/17.
 */

(function ($) {
    $(function(){

        value = $('#experation').attr('value');
        if(value == ""){

            $('.statut').css("display","inline-block");
        }

        $('#modif-button').on('click',function () {

                $('.statut').attr("disabled",false);

        })

        $('#valid-button').on('click',function () {

            $('.statut').attr("disabled",true);

        })
    });

})(jQuery);