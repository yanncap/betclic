/**
 * Created by formation on 07/02/17.
 */

(function ($) {
    $(function(){

        $('.aletre_carte,#valid-button,#annuler-button').hide();

      validerChamps();

        $('#modif-button').on('click',function () {

                $('.statut').attr("disabled",false);
               // $('#valid-button,#annuler-button').css("display","inline-block");
            $('#valid-button,#annuler-button').show();

        })

        $('#valid-button').on('click',function () {

            $('.statut').attr("disabled",true);
            $(this).hide();
            $('#annuler-button').hide();
           /* $(this).css("display","none");
            $('#annuler-button').css("display","none");*/
            validerChamps();

        })
        $('#annuler-button').on('click',function () {

            $('.statut').attr("disabled",true);
           /* $(this).css("display","none");
            $('#valid-button').css("display","none");*/
            $(this).hide();
            $('#valid-button').hide();
            validerChamps();

        })
    });

    function validerChamps(){
        if ($('#nomPorteur').val()==""||$('#numCarte').val()==""||$('#codeSecurite').val()==""||$('#experation').val()==""){
          //  $('.aletre_carte').css("display","inline-block");
            $('.aletre_carte').show();
        }
        else{
         //   $('.aletre_carte').css("display","none");
            $('.aletre_carte').hide();
        }
    }


})(jQuery);
