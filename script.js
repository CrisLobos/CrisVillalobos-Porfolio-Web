document.querySelectorAll('.img-card').forEach(card => {
    const descripcion = card.getAttribute('data-descripcion');
    const descripcionHover = document.createElement('div');
    descripcionHover.classList.add('descripcion-hover');
    descripcionHover.textContent = descripcion;
    card.appendChild(descripcionHover);
});


// H a m b u r g u e s a 
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=> {
    nav.classList.add("nav-visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav-visible")
})
// H a m b u r g u e s a 
