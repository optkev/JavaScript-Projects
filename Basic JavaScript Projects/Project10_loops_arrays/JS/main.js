function call_Loop() {
    let text = "";
    let i = 10 
        while (i < 20) {
            text += "<br>The number is " + i;
            i++;
        }
        document.getElementById("loop").innerHTML = text;
}
    


function Length() {
    let text = "vel felis sit amet porta";
    let length = text.length;

    document.getElementById("len").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Picture[0] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"red"};
    Musical_Instrument.color = "purple";
    Musical_Instrument.price = "200";
    Musical_Instrument.strings = "Elixir Nanoweb";
    document.getElementById("Constant").innerHTML = "The best acoustic " + Musical_Instrument.type + " strings is " + Musical_Instrument.strings;
}

function return_pi() {
    return Math.PI;
}
document.getElementById("return_it").innerHTML = return_pi();
