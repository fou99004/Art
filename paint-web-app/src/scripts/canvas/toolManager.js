class ToolManager {
    constructor() {
        this.currentTool = null;
        this.tools = {
            pencil: this.createPencilTool(),
            eraser: this.createEraserTool(),
            // Add more tools as needed
        };
    }

    createPencilTool() {
        return {
            name: 'pencil',
            draw: (context, x, y) => {
                context.beginPath();
                context.arc(x, y, 2, 0, Math.PI * 2);
                context.fill();
            }
        };
    }

    createEraserTool() {
        return {
            name: 'eraser',
            draw: (context, x, y) => {
                context.clearRect(x - 5, y - 5, 10, 10);
            }
        };
    }

    selectTool(toolName) {
        if (this.tools[toolName]) {
            this.currentTool = this.tools[toolName];
        } else {
            console.error(`Tool ${toolName} does not exist.`);
        }
    }

    getCurrentTool() {
        return this.currentTool;
    }
}

export default ToolManager;