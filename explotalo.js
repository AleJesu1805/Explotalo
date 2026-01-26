/* LÓGICA DE LA BALA */

    let gatillo = document.getElementById('gatiyo');
    let bala = document.getElementById('bala');
    
    posicionBala = 85; 
    function dispara() {
       
       setInterval(() => {
          posicionBala+= 1; 
          bala.style.top = posicionBala + 'px'
       }, 1);
       
       if(posicionBala >= 900) {
           posicionBala = 85;
       }
    }
