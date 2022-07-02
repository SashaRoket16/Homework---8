document.write("<canvas width = '1000' higth='1000' id = 'canvas' ></canvas>")
let Btn = document.getElementById('btn')

Btn.style.marginLeft = "auto"
Btn.style.scrollBehavior = 'auto';
Btn.style.margin = "auto"
Btn.style.display = "block";
let i = 0;
let j = 10
let calor = [
    "violet ",
    "red",
    "green",
    "blue",
    "Orange"
]
let c = calor[0];
let d = calor[6]
Btn.onclick = () => {


    let a = true;

    if (i <= 99, a == true) {
        function draw() {
            var canvas = document.getElementById('canvas');

            var ctx = canvas.getContext('2d');


            //ctx.beginPath();
            var x = j // x coordinate
            j += 11
            var y = 25; // y coordinate
            var radius = 5; // Arc radius
            var startAngle = 0; // Starting point on circle
            var endAngle = Math.PI * 2 // End point on circle
            var anticlockwise = false; // clockwise or anticlockwise

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            ctx.fillStyle = Math.random(c, d);

            ctx.fill();






        }
        for (i; i <= 91; i++) {
            console.log("hel")
            draw()




        }

    }
}