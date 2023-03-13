//first line: 1,3, 5, 7, ..., 51 using while loops

var x = 1;
while(x < 51){
    document.getElementById("ln1").innerHTML += (x+2) + ", ";
    x+=2;
}



//second line: 2, 4, 6, ..., 50 using do while loop

var y = 0;
do{
    document.getElementById("ln2").innerHTML += (y+2) + ", ";
    y+=2;
}
while(y < 50);











for(var m = 1; m<=4096; m=m*2){
    document.getElementById("ln3").innerHTML += m + ", "; 
}