/* ELEMENTOS */

let gatillo = document.getElementById('gatiyo');
let bala = document.getElementById('bala');
let tiroBlanco = document.getElementById('tiroBlanco');
let deslizable = document.getElementById("deslizable");
let span = document.querySelector("span");
let disparando = false; 
let animacion = null;
     
     /* ANIMACION DE LA BALA*/
     
     function animarBala() {
         let alturaInicio = 85;
         let alturaFin = 800;
         let alturaAct = alturaInicio;
         
         if(animacion) {
            cancelAnimationFrame(animacion); 
         }
         
         function animar() {
             if(alturaAct <= alturaFin && disparando) {
                 bala.style.top = alturaAct + "px";
                 alturaAct += 8;
             animacion = requestAnimationFrame(animar);
             } else {
                 bala.style.top = alturaInicio + "px";
                 disparando = false;
                 gatillo.disabled = false;
                 animacion = null;
             }  
         }
     animacion = requestAnimationFrame(animar);    
     }
     
     /* DISPARAR */
     
     function dispara() {
         if(disparando) return; {
          disparando = true;
          gatillo.disabled = true;  
         }
         setTimeout(() => {
             animarBala()
         }, 10);
     }
     
     /* DESLIZABLE */
     
     deslizable.addEventListener("input", function () {
            tiroBlanco.style.left = this.value + "%"; 
            span.textContent = this.value;   
     });
     
     deslizable.addEventListener("touchstart", function(e) {
         moviendo = true;
         e.stopPropagation();
     }, {passive: true} );
     
     deslizable.addEventListener("touchmove", function(e) {
         if(moviendo) {
          this.dispatchEvent(new Event('input'));
    }   
}, {passive: true} );

    deslizable.addEventListener('touchend', function() {
     moviendo = false;
}, { passive: true });
    
    gatillo.addEventListener('touchstart', function(e) {
    e.preventDefault();
    dispara();
}, { passive: false });

document.addEventListener('touchmove', function(e) {
}, { passive: true });

