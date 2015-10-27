$(document).ready(function(){
    
    $("#start").siblings().hide();
    
    $("#begin").click(function(){
        $("#start").hide();
        $("#init").show();
        colorRed = false;
        suit = "";
        image = false;
    });

    $("#karteJa").click(function(){
        $("#init").hide();
        $("#roteKarte").show();
    });

    $("#karteNein").click(function(){
        $("#init").hide();
        $("#keineKarte").show();
    });

    $("#weiterInit").click(function(){
        $("#keineKarte").hide();
        $("#init").show();
    });

    $("#karteRot").click(function(){
        $("#roteKarte").hide();
        colorRed = true;
        $("#herzKarte").show();
        
    });

    $("#karteSchwarz").click(function(){
        $("#roteKarte").hide();
        colorRed = false;
        $("#pikKarte").show();
    });

    $("#kartePik").click(function(){
        $("#pikKarte").hide();
        suit = "spades";
        $("#bildKarte").show();
    });

    $("#karteKreuz").click(function(){
        $("#pikKarte").hide();
        suit = "clubs";
        $("#bildKarte").show();
    });

    $("#karteHerz").click(function(){
        $("#herzKarte").hide();
        suit = "hearts";
        $("#bildKarte").show();
    });

    $("#karteKaro").click(function(){
        $("#herzKarte").hide();
        suit = "diamonds";
        $("#bildKarte").show();
    });

    $("#karteBild").click(function(){
        $("#bildKarte").hide();
        image = true;
        $("#ueberlege").show();  // finden
    });

    $("#karteZahl").click(function(){
        $("div#bildKarte").hide();
        image = false;
        $("div#ueberlege").show(); // finden
    });

    $("#sprachwahl").click(function(){
        $("#ueberlege").hide();
        language = Math.floor((Math.random() * 3) + 1);
        switch (language) {
            case 1:
                $("#japanisch").show();
                break;
            case 2:
                $("#russisch").show();
                break;
            case 3:
                $("#englisch").show();
                break;
        }
    });

    $("#weiterJP").click(function(){
        $("#japanisch").hide();
        $("#finden").show();
    });

    $("#weiterRU").click(function(){
        $("#russisch").hide();
        $("#finden").show();
    });

    $("#weiterEN").click(function(){
        $("#englisch").hide();
        $("#finden").show();
    });


    $("#weiterLoesung").click(function(){
        $("#finden").hide();
        $("#loesung div div").hide();
        if (suit === "hearts") {
            if (image)
                $("#herzBube").show();
            else
                $("#herzSieben").show();
        } else if (suit === "diamonds") {
            if (image)
                $("#karoKoenig").show();
            else
                $("#karoZehn").show();
        } else if (suit === "clubs") {
            if (image)
                $("#kreuzKoenig").show();
            else
                $("div#kreuzAcht").show();
        } else if (suit === "spades") {
            if (image)
                $("#pikDame").show();
            else
                $("#pikNeun").show();
        }
        $("#loesung").show();
    });



});

