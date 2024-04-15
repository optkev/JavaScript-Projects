var X = 20;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var Y = 60;
    document.write(20 + Y + "<br>");
}
function Add_numbers_2() {
    var Y = 50;
    document.write(Y + 100);
}
Add_numbers_1();
Add_numbers_2();

function date_Function() {
    if (new Date().getHours() < 18) {
        document.getElementById("Date").innerHTML = "Welcome";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough";
    }
    else {
        Drink = "You are not old enough";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
