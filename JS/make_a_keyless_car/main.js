function checkDriveAge() {
    var age = prompt("How old are you?");

    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    } else {
        alert("Congratualtions on your first year of driving, Enjoy the ride!");
    }
}