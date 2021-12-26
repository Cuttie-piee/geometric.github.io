//Write a program to find nth number of geometric progression(GP).

var a = 3; 
a=parseInt(a);
var r = 4; 
r=parseInt(r);
var n = 7;
n=parseInt(n);

var nterm;
    for (var i = 0; i < n; i++) {
        nterm = a * Math.pow(r, i);
        console.log(nterm + " ");
    }