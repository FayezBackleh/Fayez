
function changeProfile(element) {
    document.getElementById('name1').innerHTML="Adrien D";
    document.getElementById('person').src='images/adrien-s.jpg';
}

var count1 = 2;
var count2 = 418;

function Accept1() {
    var element = document.getElementById("first");
    var countElement1 = document.querySelector("#numofreq");
    var countElement2 = document.querySelector("#numofcon");
    element.remove();

    count1--;
    count2++;

    countElement1.innerHTML = count1 + " Connection Requests";
    countElement2.innerHTML = count2 + " Your Connections";
}

function Accept2() {
    var element = document.getElementById("second");
    var countElement1 = document.querySelector("#numofreq");
    var countElement2 = document.querySelector("#numofcon");
    element.remove();

    count1--;
    count2++;

    countElement1.innerHTML = count1 + " Connection Requests";
    countElement2.innerHTML = count2 + " Your Connections";
}

function Ignore1() {
    var element = document.getElementById("first");
    var countElement1 = document.querySelector("#numofreq");

    element.remove();

    count1--;
    countElement1.innerHTML = count1 + " Connection Requests";
}

function Ignore2() {
    var element = document.getElementById("second");
    var countElement1 = document.querySelector("#numofreq");

    element.remove();

    count1--;
    countElement1.innerHTML = count1 + " Connection Requests";
}
