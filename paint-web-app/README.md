# Paint Web App

## Overview
This project is a web-based drawing application similar to MS Paint. It allows users to create and edit drawings using various tools and colors.

## Features
- Drawing tools: pencil, eraser, and more.
- Color picker for selecting colors.
- Canvas workspace for drawing.
- Sidebar for tool selection and options.

## Project Structure
```
paint-web-app
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── styles
│   │   ├── base.css       # Base styles
│   │   └── layout.css     # Layout-specific styles
│   ├── scripts
│   │   ├── app.js         # Main JavaScript file
│   │   ├── canvas
│   │   │   ├── drawingContext.js # Manages drawing context
│   │   │   └── toolManager.js     # Manages drawing tools
│   │   └── ui
│   │       ├── toolbar.js  # Toolbar UI setup
│   │       └── colorPicker.js # Color picker UI setup
│   ├── components
│   │   ├── CanvasWorkspace.js # Represents the drawing area
│   │   └── SidebarPanel.js     # Represents the sidebar UI
│   └── assets
│       └── .gitkeep        # Keeps the assets directory tracked
├── tests
│   └── canvasInteractions.test.js # Unit tests for canvas interactions
├── package.json            # npm configuration file
├── vite.config.js          # Vite configuration file
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd paint-web-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm run dev
```
Then open your browser and navigate to `http://localhost:3000` (or the specified port).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.