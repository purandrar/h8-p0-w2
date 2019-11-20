//tugas 1
console.log("tugas 1");
var rows1 = 5;
while(rows1 > 0){
    console.log("*");
    rows1--;
}
console.log("--------");
console.log("--------");
console.log("--------");
console.log("");

//tugas 2
console.log("tugas 2");
var rows2 = 5;
var row = rows2;
while(rows2 > 0){
    var sterne = "*"
    for(var i = 0; i < row; i++){
        sterne+="*";
    }
    console.log(sterne);
    rows2--;
}
console.log("--------");
console.log("--------");
console.log("--------");
console.log("");

//tugas 3
console.log("tugas 3");
var rows3 = 6;
for(var i = 1; i <= rows3; i++){
    var bintang="*";	
    for (var j = 1; j < i; j++){
    	bintang += "*";
    }
    console.log(bintang);
 }