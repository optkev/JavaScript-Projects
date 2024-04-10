function addition_Function() {
    var addition = 4 + 6;
    document.getElementById("Math").innerHTML = "4 + 6 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Multiple_operations").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 7;
    document.getElementById("Modulus_Operator").innerHTML = "When you divide 25 by 7 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Negation_Operator").innerHTML = -x;
}

function increment() {
    var X = 5;
    X++;
    document.write(X);
}

function decrement() {
    var X = 5.25;
    X--;
    document.write(X);
}

window.alert(Math.random());

Math.round(7.3);

let message = "This";
let x = message.toUpperCase();
document.write(x);