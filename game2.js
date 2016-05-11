$(document).ready(function () {
    var canvas = document.getElementById("imageC"),
        ctx = canvas.getContext("2d"),
        dx = 0,
        dy = 0,
        ballRadius = 10,
        a = 65,
        w = 87,
        s = 83,
        d = 68,
        sprite = {
            left: false,
            up: false,
            right: false,
            down: false,
            x: ballRadius,
            y: ballRadius
        };

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
        if (code === a) {
            sprite.left = true;
        } else if (code === w) {
            sprite.up = true;
        } else if (code === d) {
            sprite.right = true;
        } else if (code === s) {
            sprite.down = true;
        }
        console.log(code);
    }
    //hard code to false and true??

    function keyupFired(e) {
        var code = e.keyCode;
        if (code === a) {
            sprite.left = false;
        } else if (code === w) {
            sprite.up = false;
        } else if (code === d) {
            sprite.right = false;
        } else if (code === s) {
            sprite.down = false;
        }
        console.log(code);
    }

    document.addEventListener("keydown", keydownFired, false);
    document.addEventListener("keyup", keyupFired, false);


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

    function loadImg() {

    }

    var img = new Image();
    img.onload = function () {
        //ctt.drawImage(img, 0, 0, 400, 400);
        ctx.drawImage(img, sprite.x, sprite.y);
    }
    img.src = 'http://localhost:3000/images/helmet.png';

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, sprite.x, sprite.y);

        //loadImg();
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
        //todo: attempt velocity with maximum and
        //reset to 0 when hitting the boundaries

        //need to update how we detect collision here.

        if (sprite.x + dx > canvas.width - ballRadius || sprite.x + dx < ballRadius) {
            dx = 0;
        }
        if (sprite.y + dy > canvas.height - ballRadius || sprite.y + dy < ballRadius) {
            dy = 0;
        }

        sprite.x += dx;
        sprite.y += dy;

        requestAnimationFrame(draw);
    }

    draw();
});
