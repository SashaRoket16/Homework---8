let Btn = document.getElementById('Btn')

let bnb1 = false
Btn.style.marginLeft = "auto"
Btn.style.width = "220px"
Btn.style.scrollBehavior = 'auto';
Btn.style.margin = "auto"
Btn.style.display = "block";
let i = 0;
let j = 10
let can
r = []
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

    while (i <= 99) {


        for (i; i <= 99; i++) {

            can = `canvas${i}`;
            let canv = document.getElementById(`canvas99`)
            r[i] = document.write(`<canvas width = 20 higth='1' , id = ${can} , class = "canvass", type = button ></canvas>`)

            bnb1 = true


            if (bnb1 == true) {
                function draw() {
                    let canvas = document.getElementById(`${can}`);

                    let ctx = canvas.getContext('2d');


                    //ctx.beginPath();
                    let x = 10 // x coordinate

                    let y = 10; // y coordinate
                    let radius = 10; // Arc radius
                    let startAngle = 0; // Starting point on circle
                    let endAngle = Math.PI * 2 // End point on circle
                    let anticlockwise = true; // clockwise or anticlockwise

                    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                    ctx.fillStyle = calor[Math.floor(calor.length * Math.random())]

                    ctx.fill();
                    canvas.onclick = () => {
                        canvas.remove()
                        while (i <= 99) {
                            document.write(`<canvas width = 20 higth='1' , id = ${can} , class = "canvass", type = button ></canvas>`)
                        }







                    }
                }
                draw()
            }
        }
    }
}
