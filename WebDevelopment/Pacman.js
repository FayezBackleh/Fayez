var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]

function DisplayWorld() {

    var output = '';
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2)
                output += "\n\t<div class='brick'></div>";

            else if (world[i][j] == 1)
                output += "\n\t<div class='coin'></div>";

            if (world[i][j] == 0)
                output += "\n\t<div class='empty'></div>";
        }
        output += "\n</div>";
    }
    document.getElementById("world").innerHTML = output;
}

var pacman = {
    x: 0,
    y: 0
};

var ghost = {
    x: 0,
    y: 6
}

function displayPacman() {
    document.getElementById('Pacman').style.top = pacman.y * 24 + "px";
    document.getElementById('Pacman').style.left = pacman.x * 24 + "px";
}

DisplayWorld();
displayPacman();

document.onkeydown = function (e) {
    if (e.keyCode == 37) {
        pacman.x--;
    }

    else if (e.keyCode == 39) {
        pacman.x++;
    }

    else if (e.keyCode == 38) {
        pacman.y--;
    }

    else if (e.keyCode == 40) {
        pacman.y++;
    }

    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        DisplayWorld();

    }

    if (ghost.y == pacman.y && ghost.x == pacman.x) {
        HidePacman();
        DisplayWorld();

    }

    displayPacman();
}

function HidePacman() {
    var element = document.getElementById("pacman");
    element.remove();
    DisplayWorld();

}




// up 40
// right 39
// left 37
// top 38
// space 32