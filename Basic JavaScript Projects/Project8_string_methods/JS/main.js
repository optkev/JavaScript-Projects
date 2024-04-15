function full_Sentence() {
    var part_1 = "This ";
    var part_2 = "is a ";
    var part_3 = "full sentence.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
    var Section = Sentence.slice(25,49);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Case() {
    let text = document.getElementById("Upper_case").innerHTML;
    document.getElementById("Upper_case").innerHTML = text.toUpperCase();
}

function search_Method() {
    let text = "Find bibendum";
    let index = text.search("bibendum");
    document.getElementById("Search").innerHTML = index;
}

function string_Method() {
    var Y = 49;
    document.getElementById("To_string").innerHTML = Y.toString();
}

function precision_Method() {
    var Y = 9193.4948981948;
    document.getElementById("Precision").innerHTML = Y.toPrecision(5);
}

function Fixed() {
    let num = 4.49494;
    let n = num.toFixed();
    document.getElementById("To_fixed").innerHTML = n;
}

function value_of_Method() {
    let text = "Mauris tincidunt";
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}