/* LÓGICA DE LA BALA */

    let gatillo = document.getElementById('gatiyo');
    let bala = document.getElementById('bala');
    
    posicionBala = 85; 
    function dispara() {
       setInterval(() => {
          posicionBala++; 
          bala.style.top = posicionBala + 'px'
       }, 5);
    }