let boton = false;

function Carta(cartas, tiras) {
  const carta = document.getElementById(cartas);
  const tira = document.getElementById(tiras);
  const estirar = carta.clientWidth;

  if (!boton) {
    carta.style.width = "400px"
    
    carta.style.left = `220px`;
    carta.style.transition = "0.5s";
    tira.style.right = `-${400 - 10}px`;
    tira.style.transition = "0.5s";
    boton = true;
  } else {
    // Retraer la carta y la tira
    carta.style.width = "220px"
    carta.style.left = "0px";
    carta.style.transition = "0.5s";
    tira.style.right = `10px`;
    tira.style.transition = "0.5s";
    boton = false;
  }
}

// let content = document.getElementById("content");

// document.getElementById('flechaIzquierda').addEventListener('click', () => {
//     content.style.scrollBehavior = 'smooth';
//     content.scrollLeft -= window.innerWidth;
// });

// document.getElementById('flechaDerecha').addEventListener('click', () => {
//     content.style.scrollBehavior = 'smooth';
//     content.scrollLeft += window.innerWidth;
// });



function Izquierda(contenedor) {
    let content = document.getElementById(contenedor)
    content.style.scrollBehavior = 'smooth';
    content.scrollLeft -= window.innerWidth;
}
function Derecha(contenedor) {
    let content = document.getElementById(contenedor)
    content.style.scrollBehavior = 'smooth';
    content.scrollLeft += window.innerWidth;
}