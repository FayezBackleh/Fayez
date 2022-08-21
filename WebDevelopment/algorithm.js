var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    var result2 = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" id="b" onclick="howMany(${i}, ${j}, this)" ></button>`;
        }
    }
    return result;
}

// how many ninjas are hiding under the adjacent squares.
function howMany(i, j, element) {
    console.log({ i, j });
    var sum = 0;

    if (typeof theDojo[i - 1] == 'undefined') {
        sum = theDojo[i][j] + theDojo[i][j + 1] + theDojo[i][j - 1]
            + theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1];
    }

    else if (typeof theDojo[i][j + 1] == 'undefined') {
        sum = theDojo[i][j - 1] + theDojo[i][j]
            + theDojo[i + 1][j - 1] + theDojo[i + 1][j]
            + theDojo[i - 1][j - 1] + theDojo[i - 1][j];
    }

    else if (typeof theDojo[i + 1] == 'undefined') {
        sum = theDojo[i][j - 1] + theDojo[i][j] + theDojo[i][j + 1]
            + theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    }
    else if (typeof theDojo[i][j - 1] == 'undefined') {
        sum = theDojo[i][j] + theDojo[i][j + 1]
            + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
            + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    }
    //////////////////////////////////////////////////////////////////

    if (typeof theDojo[i - 1][j + 1] == 'undefined'
        && typeof theDojo[i][j + 1] == 'undefined'
        && typeof theDojo[i + 1][j + 1] == 'undefined'
        && typeof theDojo[i + 1][j] == 'undefined'
        && typeof theDojo[i + 1][j - 1] == 'undefined') {

        sum = theDojo[i][j] + theDojo[i][j - 1]
            + theDojo[i - 1][j] + theDojo[i - 1][j - 1];
        //         + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    }

    else if (typeof theDojo[i][j - 1] == 'undefined') {
        sum = theDojo[i][j] + theDojo[i][j + 1]
            + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
            + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    }

    else if (typeof theDojo[i][j - 1] == 'undefined') {
        sum = theDojo[i][j] + theDojo[i][j + 1]
            + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
            + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    }

    else if (typeof theDojo[i][j - 1] == 'undefined') {
        sum = theDojo[i][j] + theDojo[i][j + 1]
            + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
            + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    }
    ///////////////////////////////////////////////////////////////////////////////
    else {
        sum = theDojo[i][j - 1] + theDojo[i][j] + theDojo[i][j + 1]
            + theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
            + theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    }

    // alert("there are " + sum + " hiding");


    printDiv(i, j, element, sum);
}


// sum = theDojo[i][j - 1] + theDojo[i][j] + theDojo[i][j + 1]
//     + theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
//     + theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1];





// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);


function printDiv(i, j, element, sum) {
    console.log({ i, j });
    element.innerHTML = sum;
}

