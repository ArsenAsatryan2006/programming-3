var express = require('express');
var app = express();
var Pat = require("./Pat")
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Grass = require("./Grass");
var GrassEater = require("./GrassEater");
var Zombi = require("./Zombi");
var Gishatich = require("./Gishatich");
var Tunavorxot = require("./Tunavorxot");
matrix = [];
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);
function matrixGenerator(matY, matX, grass, grasseater, gishatich, bomb, tunavorxot) {

    for (let i = 0; i < matY; i++) {
        matrix[i] = [];
        for (let j = 0; j < matX; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < grass; i++) {
        let x = Math.floor(Math.random() * matY)
        let y = Math.floor(Math.random() * matX)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }
    }
    for (let i = 0; i < grasseater; i++) {
        let x = Math.floor(Math.random() * matY)
        let y = Math.floor(Math.random() * matX)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
        }
    }
    for (let i = 0; i < gishatich; i++) {
        let x = Math.floor(Math.random() * matY)
        let y = Math.floor(Math.random() * matX)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }
    }
    for (let i = 0; i < bomb; i++) {
        let x = Math.floor(Math.random() * matY)
        let y = Math.floor(Math.random() * matX)
        // if(matrix[y][x] == 0){
        matrix[y][x] = 4;
        // }
    }
    for (let i = 0; i < tunavorxot; i++) {
        let x = Math.floor(Math.random() * matY)
        let y = Math.floor(Math.random() * matX)

        matrix[y][x] = 5;

    }
    return matrix;
}


matrixGenerator(50, 50, 2500, 300, 20, 5, 30);
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Gishatich(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Zombi(x, y, 4)
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new Tunavorxot(x, y, 5)
        }
        else if (matrix[y][x] == 7) {
            matrix[y][x] = new Pat(x, y, 7)
        }
    }
}
function game() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj.index == 1) {
                obj.mul();
            }
            else if (obj.index == 2) {
                obj.eat();
            }
            else if (obj.index == 3) {
                obj.eat();
            }
            else if (obj.index == 4) {
                obj.eat();
            }
            else if (obj.index == 5) {
                obj.mul();
            }
        }
    }
    io.sockets.emit("matrix", matrix);
}

function miq(){
    var random1 = Math.floor(Math.random() * matrix.length);
    var random2 = Math.floor(Math.random() * matrix[1].length);
    var i = matrix[random1][random2].index;
    return i;
}
setInterval(game, 1000);
io.on('connection', function (socket) {
    socket.on("bomb", function (data) {


        
        if (i == 0) {
            matrix[random1][random2].index = 7;
        }
        else{
            miq();
        }






        console.log("bomb");
        console.log(random1);
        console.log(random2);



    });
});
