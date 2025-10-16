function setupColorPicker(onColorChange) {
    const colorPickerElement = document.createElement('input');
    colorPickerElement.type = 'color';
    colorPickerElement.value = '#000000'; // Default color

    colorPickerElement.addEventListener('input', (event) => {
        const selectedColor = event.target.value;
        onColorChange(selectedColor);
    });

    document.body.appendChild(colorPickerElement);
}

export { setupColorPicker };