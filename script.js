document.addEventListener('DOMContentLoaded', function() {

    const colorPalette = document.querySelector('#color-palette');
const colors = colorPalette.querySelectorAll('.randomColor');

function generateRandomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

document.querySelector('#button-random-color').addEventListener('click', () => {
  colors.forEach(color => {
    color.style.backgroundColor = generateRandomColor();
  });
});
    
});