const colors_sq_i = document.getElementById('colors_sq')
function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
function Color() {
    const randomColor = generateRandomColor();
    colors_sq_i.style.backgroundColor = randomColor;
    colors_sq_i.textContent = randomColor;
}
colors_sq_i.addEventListener("click", Color);
