import { DrawingContext } from '../src/scripts/canvas/drawingContext';
import { ToolManager } from '../src/scripts/canvas/toolManager';

describe('Canvas Interactions', () => {
    let drawingContext;
    let toolManager;

    beforeEach(() => {
        drawingContext = new DrawingContext();
        toolManager = new ToolManager();
        drawingContext.init();
    });

    test('should set color correctly', () => {
        const color = '#ff0000';
        drawingContext.setColor(color);
        expect(drawingContext.currentColor).toBe(color);
    });

    test('should draw a line', () => {
        const start = { x: 10, y: 10 };
        const end = { x: 100, y: 100 };
        drawingContext.setColor('#000000');
        drawingContext.drawLine(start, end);
        // Assuming drawLine modifies a canvas state that can be checked
        expect(drawingContext.canvasState).toContainEqual({ start, end, color: '#000000' });
    });

    test('should select a tool', () => {
        toolManager.selectTool('pencil');
        expect(toolManager.getCurrentTool()).toBe('pencil');
    });

    test('should switch tools', () => {
        toolManager.selectTool('eraser');
        expect(toolManager.getCurrentTool()).toBe('eraser');
        toolManager.selectTool('pencil');
        expect(toolManager.getCurrentTool()).toBe('pencil');
    });
});