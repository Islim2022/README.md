console.log("page loaded...");

function message(){
    alert("Ninja was liked!");
}
function login(elem){
    if(elem.innerText == "Login"){
        elem.innerText = "Logut";
    }
    else {
        elem.innerText = "Login";
    }
}
function hide(elem){
    elem.remove();
}
