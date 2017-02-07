/**
 * Created by Gally on 06/02/2017.
 */
var boolDico = false;

$(function(){
    $(".menuMBouton").on("click", function(){lateral()})
    $(".shadow").on("click", function(){lateralFin()})
    $(".btnDicoMob").on("click", function(){affiDico()})
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

/*function sizing(){
    var taillePage = $("body").innerWidth();
    console.log(taillePage);
}*/