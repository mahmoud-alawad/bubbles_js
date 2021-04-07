

let arr1 =  [ 'marco', 'antonio', 'luca', 13, 18, 'leo', 'mary'];
let arr2 = [21, 19, 12, 'sebastian', 'will', 23, 20];

const arrays = arr1.concat(arr2);


function numbersOnly(myArray) {
    return myArray.filter(myArray => typeof myArray == "number");
}

function personOnly(myArray) {
    return myArray.filter(myArray => typeof myArray == "string");
}
let outPutNumbers = numbersOnly(arrays);
let outPutPerson = personOnly(arrays);
outPutNumbers.shift();
outPutNumbers.shift();
outPutNumbers.push(13, 18)



function transformToObject(arrayData, arrayNumbers) {
    let container = [];
    
    
for (let i = 0; i < arrayData.length; i++) {

        let personArray = arrayData[i];
        let personObject = {};
        let key = personArray;
        let value = arrayNumbers[i];
        personObject[key] = value;

    container.push(arrayData);
   
    //   console.log(personObject);
}

return container;

}

let output = transformToObject(outPutPerson, outPutNumbers);

/*=================================================================*/
// let canvas = document.getElementById("canvas1");


let canvas = document.createElement('canvas');
canvas.className = 'canvas';
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
canvas.height = windowHeight;
canvas.width = windowWidth;
console.log(canvas);
canvas.style.background = 'trasparent';


ctx.fillStyle = 'red';
ctx.fillRect(100, 150, 70, 100);
ctx.fillRect(300, 30, 70, 100);

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(250, 50, 40, 0, Math.PI * 2, false);
ctx.stroke();
ctx.closePath();


class circle {
    constructor(xpos, ypos, radius, color, text, speed){
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
    }

    drow(ctx){
    ctx.beginPath();
    ctx.strokeStyle =  this.color;
    ctx.textAlign = 'center';
    ctx.font = '20px Arial'
    ctx.lineWidth  = 2;
    ctx.fillText(this.text, this.xpos, this.ypos);
    ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    }

    update(){
        ctx.clearRect(0, 0, windowWidth, windowHeight)
        this.drow(ctx);
        if ((this.xpos + this.radius) > windowWidth) {
            this.dx = -this.dx;
        }
        if ((this.xpos - this.radius) > 0) {
            this.dx -= this.dx;
        }
      
        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}

let circule_cunter = 1;
let all_circles = [];
let random_x = Math.random() * window.innerWidth;
let random_y = Math.random() * window.innerHeight;
let my_circle = new circle(random_x, random_y, 50, "black", circule_cunter, 5);

my_circle.drow(ctx);

let updateCircle = function () {
    requestAnimationFrame(updateCircle);
    my_circle.update();
}
updateCircle();

/*
for(let numbers = 0;  numbers < 10; numbers++){

    let random_x = Math.random() * window.innerWidth;
    let random_y = Math.random() * window.innerHeight;
    let my_circle = new circle(random_x, random_y, 50, "black", circule_cunter, 1);

    all_circles.push(my_circle);
    createCircle(all_circles[numbers]);
    circule_cunter++;
   
}
*/


