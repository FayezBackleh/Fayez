
var count1=0;
var count2=0;
var count3=0;


var countElement1=document.querySelector("#count1");
console.log(countElement1);

function increaseLikes1(){
    count1++;
    countElement1.innerHTML= count1+ " like(s)";
    console.log(count1);
}
var countElement2=document.querySelector("#count2");

function increaseLikes2(){
    count2++;
    countElement2.innerHTML= count2+ " like(s)";
    console.log(count2);
}

var countElement3=document.querySelector("#count3");

function increaseLikes3(){
    count3++;
    countElement3.innerHTML= count3+ " like(s)";
    console.log(count3);
}