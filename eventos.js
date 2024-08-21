document.getElementById('saludarBtn').addEventListener('click', function(event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert('Hola!');
});

document.getElementById('contenedor').addEventListener('click', function() {
    alert('Hola! Soy el div');
});