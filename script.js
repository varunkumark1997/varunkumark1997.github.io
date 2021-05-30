var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var stickPos = 185;
var ballPosx = 197.5;
var ballPosy = 390;

initilizeStick();
initilizeBall();
document.addEventListener("keydown", moveStick);

function initilizeStick(){
    ctx.fillRect(stickPos, 395, 30, 5);
}

function initilizeBall(){
    ctx.fillRect(ballPosx, ballPosy, 5, 5);
}

function moveStick(e){
    if(e.key == "ArrowLeft") {
        if(stickPos > 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stickPos = stickPos - 5
            ctx.fillRect(stickPos, 395, 30, 5); 
        }
    }
    else if (e.key == "ArrowRight") {
        if(stickPos < 370) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stickPos = stickPos + 5
            ctx.fillRect(stickPos, 395, 30, 5);
        }
    }
}