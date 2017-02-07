/**
 * Created by formation on 07/02/17.
 */

(function ($) {
    $(function(){

        value = $('#experation').attr('value');
        if(value == ""){

            $('.aletre_carte').css("display","inline-block");
        }

        $('#modif-button').on('click',function () {

                $('.statut').attr("disabled",false);
                $('#valid-button,#annuler-button').css("display","inline-block");

        })

        $('#valid-button').on('click',function () {

            $('.statut').attr("disabled",true);
            $(this).css("display","none");
            $('#annuler-button').css("display","none");

        })
        $('#annuler-button').on('click',function () {

            $('.statut').attr("disabled",true);
            $(this).css("display","none");
            $('#valid-button').css("display","none");

        })
    });

})(jQuery);