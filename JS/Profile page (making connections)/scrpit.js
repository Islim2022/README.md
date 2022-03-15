console.log("page loaded...");

var username = document.querySelector("#username");

function edit(){
    username.innerText = "Hanei Islim"
}

var requests = document.querySelector(".requests");
var connections = document.querySelector(".connections");

function accept(id){
    var user = document.querySelector(id);
    requests.innerText--;
    connections.innerText++;
    user.remove(id);
}

function decline(id){
    var user = document.querySelector(id);
    requests.innerText--;
    user.remove(id);
}