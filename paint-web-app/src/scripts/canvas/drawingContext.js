class DrawingContext {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.color = '#000000'; // Default color
        this.lineWidth = 2; // Default line width
    }

    init() {
        this.context.fillStyle = this.color;
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.lineWidth;
    }

    setColor(color) {
        this.color = color;
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
    }

    drawLine(startX, startY, endX, endY) {
        this.context.beginPath();
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.stroke();
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default DrawingContext;