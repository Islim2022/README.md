console.log("page loading...");

function display(){
    alert("Loading weather report...");
}

var cookie = document.querySelector(".row-3");
function accept(){
    cookie.remove();
}

function fc(temp){
    return math.round(5 / 9 * (temp - 32));
}
function cf(temp){
    return Math.round(9/5 * temp + 32);
}
  
function load(element){
    for(var i = 1; i < 9; i++){
        var templi = document.querySelector("#temp" + i);
        var tempVal = parseInt(templi.innerText);
        if(element.value == "°C") {
            templi.innerText = fc(tempVal);
        } 
        if(element.value == "°F"){
            templi.innerText = cf(tempVal);
        }
    }
}