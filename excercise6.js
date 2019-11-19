//tugas 1
console.log("tugas 1");
var number = 0;
console.log("LOOPING PERTAMA");
while(number < 20){
    number += 2;
    console.log(number + "\t - i love coding") ;
}
console.log("");
console.log("LOOPING KEDUA");
while(number>0){
    number -= 2;
    console.log(number + "\t - I will become full stack developer");
}
console.log("--------");
console.log("--------");
console.log("--------");
console.log("");

//tugas 2
console.log("tugas 2");
console.log("LOOPING PERTAMA");
for(var i = 0; i <=20; i++){
    console.log(i + " - I love coding");
}
console.log("");
console.log("LOOPING KEDUA");
for(var i = 20; i > 0 ; i--){
    console.log(i + " - I will become full stack developer");
}
console.log("--------");
console.log("--------");
console.log("--------");
console.log("");

//tugas 3
console.log("tugas 3");
for(var i = 1; i<= 100; i++){
    if(i%2===0)
        console.log(i + "\tgenap");
    else
        console.log(i + "\tganjil");
}
console.log("");
for(var i =1; i<= 100; i+=2){
    if(i%3 === 0)
        console.log(i + " kelipatan 3");
}
console.log("");
for(var i =1; i<= 100; i+=5){
    if(i%6 === 0)
        console.log(i + " kelipatan 6");
}
console.log("");
for(var i =1; i<= 100; i+=9){
    if(i%10 === 0)
        console.log(i + " kelipatan 10");
}
