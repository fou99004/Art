// Main JavaScript file for the drawing application
import { setupToolbar } from './ui/toolbar.js';
import { setupColorPicker } from './ui/colorPicker.js';
import { CanvasWorkspace } from '../components/CanvasWorkspace.js';
import { ToolManager } from './canvas/toolManager.js';
import { DrawingContext } from './canvas/drawingContext.js';

const canvasWorkspace = new CanvasWorkspace();
const toolManager = new ToolManager();
const drawingContext = new DrawingContext();

function init() {
    setupToolbar(toolManager);
    setupColorPicker(drawingContext);
    canvasWorkspace.init();
}

document.addEventListener('DOMContentLoaded', init);