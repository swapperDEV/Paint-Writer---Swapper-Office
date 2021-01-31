const drawingToolBtn = document.querySelector('#drawingTool');
const textToolBtn = document.querySelector('#textTool');
const textToolInput = document.querySelector('#textToolInput');

let drawColor = 'blue';
let task = 'draw';

let fontType = 'normal';
let fontSize = 30;

const save = document.querySelector('.save');
save.addEventListener('click', () => {
    localStorage.setItem(canvas, canvas.toDataURL());
})
const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
const fontInput = document.querySelector('#fontInput')
const changeFont = () => {
    fontSize = fontInput.value
}
const changeColor = () => {
    drawColor = colorInput.value;
    ctx.strokeStyle = drawColor;
    ctx.fillStyle = drawColor;
}

const px2 = document.querySelector('#px2');
const px3 = document.querySelector('#px3');
const px4 = document.querySelector('#px4');
const px5 = document.querySelector('#px5');
const colorInput = document.querySelector('#colorInput');



drawingToolBtn.addEventListener('click', () => {
    task = 'draw'
});

textToolBtn.addEventListener('click', () => {
    task = 'text'
});

const canvas = document.querySelector('#drawingArea');
const ctx = canvas.getContext('2d');
let mouseDown = false;
let newLine = true;

ctx.lineWidth = 10;
ctx.lineCap = "round"

canvas.addEventListener("mouseleave", () => {
	newLine = true;
});

function getMouseXY(e) {
    const rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
}

function draw(e) {
    const [x, y] = getMouseXY(e);
    if (newLine) {
        ctx.moveTo(x, y);
        newLine = false;
    } else {
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(x, y);
}

canvas.addEventListener('mousemove', e => {
    if (task == "draw" && mouseDown) {
        draw(e);
    }
});

canvas.addEventListener('mousedown', e => {
    if (task == "draw") {
        mouseDown = true;
    } else {
        const [x, y] = getMouseXY(e);
        ctx.font = `${fontType} ${fontSize}px Arial`;
        ctx.fillText(textToolInput.value, x, y);
    }
});

canvas.addEventListener('mouseup', function() {
    mouseDown = false;
    newLine = true;
}, false);
var dataURL = localStorage.getItem(canvas);
var img = new Image;
img.src = dataURL;
img.onload = function () {
    ctx.drawImage(img, 0, 0);
};