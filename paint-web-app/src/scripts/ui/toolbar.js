function setupToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'toolbar';

    const pencilButton = document.createElement('button');
    pencilButton.innerText = 'Pencil';
    pencilButton.addEventListener('click', () => {
        // Logic to select the pencil tool
    });

    const eraserButton = document.createElement('button');
    eraserButton.innerText = 'Eraser';
    eraserButton.addEventListener('click', () => {
        // Logic to select the eraser tool
    });

    toolbar.appendChild(pencilButton);
    toolbar.appendChild(eraserButton);

    document.body.appendChild(toolbar);
}

export { setupToolbar };