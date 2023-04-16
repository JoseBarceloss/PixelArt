document.addEventListener('DOMContentLoaded', function() {
    const colorPalette = document.documentElement.querySelector('#color-palette');
    const color = colorPalette.querySelectorAll('.randomColor');
    let savedColor = JSON.parse(localStorage.getItem('colorPalette')) || {};
  
    function gerarCor (){
      const Gerar = Math.floor(Math.random() * 16777215).toString(16);
      return '#' + Gerar;
    }
  
    color[0].style.backgroundColor = 'black';
  
    if (Object.keys(savedColor).length !== 0) {
      for (let i = 1; i < color.length; i++) {
        color[i].style.backgroundColor = savedColor[i] || gerarCor();
      }
    } else {
      for (let i = 1; i < color.length; i++) {
        color[i].style.backgroundColor = gerarCor();
        savedColor[i] = color[i].style.backgroundColor;
      }
      localStorage.setItem('colorPalette', JSON.stringify(savedColor));
    }
  
    document.querySelector('#button-random-color').addEventListener('click', () => {
      for (let i = 1; i < color.length; i++) {
        color[i].style.backgroundColor = gerarCor();
        savedColor[i] = color[i].style.backgroundColor;
      }
      localStorage.setItem('colorPalette', JSON.stringify(savedColor));
    });

    const black = document.querySelector('#color0');
    
    black.classList.add('selected');

    const colors = document.querySelectorAll('.color');
    colors.forEach(color => {
        if (color !== black) {
        color.classList.remove('selected');
        }
    });

    colorPalette.addEventListener('click', (event) =>{
        const color = event.target;
        if (color.classList.contains('color')) {
            const colors = document.querySelectorAll('.color');
            colors.forEach(colo => colo.classList.remove('selected'));
            color.classList.add('selected');
        }
    });

    
  });