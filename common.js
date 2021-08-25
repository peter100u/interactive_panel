function getRandomColor() {
    const r = Math.round(Math.random() * 255), g = Math.round(Math.random() * 255),
        b = Math.round(Math.random() * 255);
    const color = r << 16 | g << 8 | b;
    return "#" + color.toString(16)
}