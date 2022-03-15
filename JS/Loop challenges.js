//Print odds 1-20 using a loop:
for (var i = 1; i<=20; i+=2){
    console.log(i)
}

//Decreasing multiples of 3 fromm 100 down to 0 using a loop:
for(var i = 100; i >= 0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//Print the sequences:
for(var i = 4; i > -4; i-=1.5){
    console.log(i);
}
   
//Sigma"
var sum = 0;
for(var i = 1; i<=100; i++){
    sum += i;
}
console.log(sum);

//Factorial:
var product = 1;
for(var i = 1; i<=12; i++){
    product *= i;
}
console.log(product);