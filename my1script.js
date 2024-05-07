setInterval(idle, 100);

function test(event) {
    if (event.which == 32) {



        if (event.which == 13) {

        }
    }
}

var idleImageNumber = 0;
var player = document.getElementById("player");
var idleWorkerId = 0;
function idle() {
    idleImageNumber++;
    if (idleImageNumber == 10) {
        idleImageNumber = 1;

    }
    player.src = "Idle (" + idleImageNumber + ").png";

}
function idleMove(){
    idleWorkerId = setInterval(idle,100);
}
function ins(){
    window.location = "instruction.html";
}
function back(){
    window.location = "my1index.html";
}
function startGame1(){
    window.location = "index.html";
}
function mission(){
    window.location = "mission.html";

}
function startGame2(){
    window.location = "mission 2/index.html";
}
