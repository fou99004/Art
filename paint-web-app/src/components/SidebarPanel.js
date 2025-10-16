class SidebarPanel {
    constructor() {
        this.visible = true;
        this.tools = ['pencil', 'eraser', 'rectangle', 'circle'];
        this.currentTool = this.tools[0];
    }

    toggleVisibility() {
        this.visible = !this.visible;
        this.updateSidebar();
    }

    updateTool(tool) {
        if (this.tools.includes(tool)) {
            this.currentTool = tool;
            this.updateSidebar();
        }
    }

    updateSidebar() {
        // Logic to update the sidebar UI based on visibility and current tool
        console.log(`Sidebar is now ${this.visible ? 'visible' : 'hidden'}. Current tool: ${this.currentTool}`);
    }
}

export default SidebarPanel;