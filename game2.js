$(document).ready(function () {
    var canvas = document.getElementById("imageC");
    var ctx = canvas.getContext("2d");
    var dx = 0;
    var dy = 0;
    var ballRadius = 10;
    var a = 65;
    var w = 87;
    var s = 83;
    var d = 68;
    var sprite = {
        left: false,
        up: false,
        right: false,
        down: false,
        x: ballRadius,
        y: ballRadius
    };

    document.addEventListener("keydown", keydownFired, false);
    document.addEventListener("keyup", keyupFired, false);

    function keydownFired(e) {
        //a: 65
        //w: 87
        //s: 83
        //d: 68
        //left: 37
        //up: 38
        //down: 40
        //right: 39
        var code = e.keyCode;
        if (code == a) {
            sprite.left = true;
        } else if (code == w) {
            sprite.up = true;
        } else if (code == d) {
            sprite.right = true;
        } else if (code == s) {
            sprite.down = true;
        }
        console.log(code);
    }
    //hard code to false and true??

    function keyupFired(e) {
        var code = e.keyCode;
        if (code == a) {
            sprite.left = false;
        } else if (code == w) {
            sprite.up = false;
        } else if (code == d) {
            sprite.right = false;
        } else if (code == s) {
            sprite.down = false;
        }
        console.log(code);
    }

    function collision() {

    }

    function drawSprite() {
        ctx.beginPath();
        console.log("x: " + sprite.x);
        console.log("y: " + sprite.y);
        ctx.arc(sprite.x, sprite.y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSprite();
        //collision();
        //set the dx & dy
        dx = 0;
        dy = 0;
        if (sprite.right) {
            dx += 2;
        }
        if (sprite.left) {
            dx -= 2;
        }
        if (sprite.down) {
            dy += 2;
        }
        if (sprite.up) {
            dy -= 2;
        }
        collision();

        //need to update how we detect collision here.

        if(sprite.x + dx > canvas.width - ballRadius || sprite.x + dx < ballRadius){
            dx = 0;
        }
        if(sprite.y + dy > canvas.height - ballRadius || sprite.y + dy < ballRadius){
            dy = 0;
        }

        sprite.x += dx;
        sprite.y += dy;

        /*console.log('stuff: ' + sprite.left + '\n' + sprite.right);
        console.log(sprite.up + '\n' + sprite.down);
        console.log(sprite.x + '\n' + sprite.y);

        if(pause){} else{
           requestAnimationFrame(draw);
           })
        */
        requestAnimationFrame(draw);
    }

    var pause = true;

        $("#Pause").click(function () {
        pause = !pause;
        if (!pause) {
            drawPong();
        }
    });

    draw();
});
