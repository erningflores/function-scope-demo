/**
 * function 1 or test number 1
 */
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para1 = document.createElement('p');
const para2 = document.createElement("p");
const section = document.querySelector("section");

function chooseName(){
    let x = Math.floor(Math.random() * (names.length));
    para1.textContent = `name: ${names[x]}`;
}
chooseName();
console.log(`length: ${names.length}`);

const shortNames = names.filter(x => x.length < 5);
para2.textContent = `ShortNames with length < 5: ${shortNames}`;

section.innerHTML = ' ';
section.appendChild(para1);
section.appendChild(para2);

const chooseButton = document.createElement('button');
chooseButton.textContent = 'Choose Another Name';
chooseButton.style.marginTop = '20px';
chooseButton.style.padding = '10px 15px';
chooseButton.style.backgroundColor = '#6c757d';
chooseButton.style.color = 'white';
chooseButton.style.border = 'none';
chooseButton.style.borderRadius = '5px';
chooseButton.style.cursor = 'pointer';
chooseButton.addEventListener('click', chooseName);
section.appendChild(chooseButton);

/**
 * function 2
 */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x1 = 50;
const y1 = 60;
const width1 = 100;
const height1 = 75;
const color1 = 'blue';
const color2 = 'red';

function draw(){
    ctx.fillStyle = color1;
    ctx.fillRect(x1, y1, width1, height1);
    ctx.strokeStyle = color2;
    ctx.lineWidth = 4;
    ctx.strokeRect(40,50,120,95);
}
draw();

function resizeCanvas(){
    const containerWidth = canvas.parentElement.clientWidth;
    const maxWidth = 800;
    const newWidth = Math.min(containerWidth * 0.9, maxWidth);

    const aspectRatio = 2;
    const newHeight = newWidth / aspectRatio;
    
    canvas.width = newWidth;
    canvas.height = newHeight;

    if(ctx){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rectWidth = canvas.width * 0.75;
        const rectHeight = canvas.height * 0.5;
        const rectX = (canvas.width - rectWidth)/2;
        const rectY = (canvas.height - rectHeight)/2;

        ctx.fillStyle = color1;
        ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

        ctx.strokeStyle = color2;
        ctx.lineWidth = 4;
        ctx.strokeRect(rectX - 10, rectY - 10, rectWidth + 20, rectHeight + 20);
    }
}
window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
