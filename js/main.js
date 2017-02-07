/**
 * Created by Gally on 06/02/2017.
 */
var boolDico = false;

$(function(){
    $(".menuMBouton").on("click", function(){lateral()});
    $(".shadow").on("click", function(){lateralFin()});
    $(".btnDicoMob").on("click", function(){affiDico()});

    $("#okS").on("click", function(){fausseConnection(1)});
    $("#okM").on("click", function(){fausseConnection(2)});
});

function lateral(){
    $(".shadow").show();
    $(".menuLateral").show();
}

function lateralFin(){
    $(".shadow").hide();
    $(".menuLateral").hide();
}

function affiDico(){
    if(boolDico == false){
        $(".btnDicoMob i").html("vertical_align_top");
        $(".dico").show();
        boolDico = true;
    }else{
        boolDico = false;
        $(".dico").hide();
        $(".btnDicoMob i").html("vertical_align_bottom")
    }
}

function fausseConnection(choix){
    var tempPseudo,tempPassword;
    if(choix ==1){
        tempPseudo = $("#pseudoS").val();
        tempPassword = $("#passwordS").val();
    }else{
        tempPseudo = $("#pseudoM").val();
        tempPassword = $("#passwordM").val();
    }
    if (tempPseudo != "" && tempPassword != ""){
        alert("samarche");
    }
}

/*function sizing(){
    var taillePage = $("body").innerWidth();
    console.log(taillePage);
}*/