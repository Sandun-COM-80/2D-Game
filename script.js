var runStart = 0;
function keyCheck(event) {
    if (event.which == 13) {
        if (runWorkerId == 0) {
            runWorkerId = setInterval(run, 100);
            runStart = 1;
            runSound.play();
            backgroundWorkerId = setInterval(moveBackground, 100);
            scoreWorkerId = setInterval(updateScore, 100);
            createBlockId = setInterval(createBlock, 100);
            moveBlockId = setInterval(moveBlocks, 100);
        }

    }
    if (event.which == 32) {

        if (runStart == 1) {
            if (jumpWorkerId == 0) {
                clearInterval(runWorkerId);
                runSound.pause();
                jumpWorkerId = setInterval(jump, 100);
                jumpSound.play();
            }
        }

    }

}

var runSound = new Audio("runmy.mp3");
var player = document.getElementById("player");
var runImageNumber = 1;
var runWorkerId = 0;

function run() {
    runImageNumber++;
    if (runImageNumber == 9) {
        runImageNumber = 1;
    }
    player.src = "Run (" + runImageNumber + ").png";
}
var jumpSound = new Audio("myjump.mp3");
var jumpImageNumber = 1;
var playerMarginTop = 450;
var jumpWorkerId = 0;
function jump() {
    jumpImageNumber++;
    if (jumpImageNumber <= 6) {
        playerMarginTop = playerMarginTop - 30;
        player.style.marginTop = playerMarginTop + "px";
    }
    if (jumpImageNumber >= 7) {
        playerMarginTop = playerMarginTop + 30;
        player.style.marginTop = playerMarginTop + "px";
    }
    if (jumpImageNumber == 11) {
        jumpImageNumber = 1;
        clearInterval(jumpWorkerId);

        jumpWorkerId = 0;
        runWorkerId = setInterval(run, 100);
        runSound.play();

    }
    player.src = "Jump (" + jumpImageNumber + ").png";
}
//move background

var background = document.getElementById("background");
var backgroundX = 0;
var backgroundWorkerId = 0;
function moveBackground() {
    backgroundX = backgroundX - 20;
    background.style.backgroundPositionX = backgroundX + "px";

}

//update Score

var score = document.getElementById("score");
var newScore = 0;
var scoreWorkerId = 0;
function updateScore() {
    newScore++;
    score.innerHTML = newScore;

}



var createBlockId = 0;
var blockMarginLeft = 600;
var blockId = 1;
function createBlock() {
    var block = document.createElement("div");
    block.className = "block";
    block.id = "block" + blockId;
    blockId++;
    var gap = Math.random() * (1000 - 400) + 400;
    blockMarginLeft = blockMarginLeft + gap;
    block.style.marginLeft = blockMarginLeft + "px";



    background.appendChild(block);
}

// Move Block
var moveBlockId = 0;
function moveBlocks() {
    for (var i = 1; i <= blockId; i++) {
        var currentBlock = document.getElementById("block" + i);
        var currentMarginLeft = currentBlock.style.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 20;
        currentBlock.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft <= 57) {
            if (newMarginLeft >= -63) {
                if (playerMarginTop <= 450) {
                    if (playerMarginTop >= 420) {

                        clearInterval(runWorkerId);
                        runSound.pause();
                        clearInterval(jumpWorkerId);
                        jumpWorkerId = -1;
                        clearInterval(backgroundWorkerId);
                        clearInterval(scoreWorkerId);
                        clearInterval(createBlockId);
                        clearInterval(moveBlockId);
                        setInterval(dead, 100);

                        deadWorkerId = setInterval(dead, 100);
                        deadSound.play();
                    }
                }

            }
        }
    }

}
var deadSound = new Audio("mydead.mp3");
var deadImageNumber = 1;
var deadWorkerId = 0;
function dead() {
    deadImageNumber++;
    if (deadImageNumber == 11) {
        deadImageNumber = 10;
        player.style.marginTop = "450px";
        document.getElementById("endScore").innerHTML = newScore;
        document.getElementById("gameOver").style.visibility = "visible";
    }
    player.src = "Dead (" + deadImageNumber + ").png";

}
function re(){
    location.reload();
}