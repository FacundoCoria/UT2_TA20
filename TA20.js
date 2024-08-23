const imagen = document.getElementById('imagen');


const imagenOriginal = "logo.jpg";
const imagenNueva = "chelsea.jpg";

imagen.addEventListener('mouseover', function() {
    imagen.src = imagenNueva;
});

imagen.addEventListener('mouseout', function() {
    imagen.src = imagenOriginal;
});
