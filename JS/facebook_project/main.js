var database = [
    {
        username: "mattkim",
        password: "secret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "kate",
        timeline: "1987"
    },
    {
        username: "matt",
        timeline: "1990"
    },
    {
        username: "kim",
        timeline: "1991"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}
function singIn (username, password) {
    if(isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password.")
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

singIn(userNamePrompt, passwordPrompt);