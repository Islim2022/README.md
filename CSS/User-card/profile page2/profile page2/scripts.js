var name1 = document.querySelector("#name");
function EditProfileName(){
      name1.innerText="Ahmad hjg"
}
var request = document.querySelector("#requests");
var connections = document.querySelector("#connections");
var id1=document.querySelector("#l1");
var id2=document.querySelector("#l2");
function accept1(){
    request.innerText--;
    connections.innerText++;
    id1.remove();

}
function reject1(){
    request.innerText--; 
    id1.remove();
}
function accept2(){
    request.innerText--;
    connections.innerText++;
    id2.remove();


}
function reject2(){
    request.innerText--; 
    id2.remove();
}