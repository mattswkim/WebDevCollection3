var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var deleteLi = document.querySelectorAll(".delete");
var deleteButton = document.querySelector(".delete");
var todoList;

function inputLength() {
    return input.value.length;
}

for(var i =0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
    deleteLi[i].addEventListener("click", function () {
        this.parentNode.remove();
    })
}



function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    ul.appendChild(li);
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    li.appendChild(button);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
    
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

