
var side = 10;
var socket = io();
function setup() {

    frameRate(3);
    createCanvas(50 * side, 50 * side);
    background('#acacac');



}
socket.on("matrix", ashxati)

function ashxati(matrix) {


    background("#acacac");
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj.index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (obj.index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);

            }
            else if (obj.index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);

            }
            else if (obj.index == 4) {
                fill("black");
                rect(x * side, y * side, side, side);

            }
            else if (obj.index == 5) {
                fill("pink");
                rect(x * side, y * side, side, side);

            }
            else if (obj.index == 7) {
                fill("#cc00cc");
                rect(x * side, y * side, side, side);
                console.log("1");
                

            }
        }
    }
}
function clickHandler(evt) {
    
    socket.emit("bomb", null)
}

var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);



