var likes = [
    document.querySelector("#Numlikes"),
    document.querySelector("#Numlikes1"),
    document.querySelector("#Numlikes2")
];

function like(id){
    likes[id].innerHTML++;
}