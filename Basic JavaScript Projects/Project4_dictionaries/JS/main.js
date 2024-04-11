function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        Color: "Black",
        Breed: "Persian",
        Age:2,
        Sound: "Meow"
    };
    delete Animal.Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}