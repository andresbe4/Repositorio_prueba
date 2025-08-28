document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces con la clase 'leer-mas'
    const leerMasBtns = document.querySelectorAll('.leer-mas');

    // Itera sobre cada botón para agregar un 'event listener'
    leerMasBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            // Previene el comportamiento por defecto del enlace (evita que la página se recargue)
            event.preventDefault();

            // Obtiene el título de la noticia o reseña
            const article = btn.closest('article, .reseña');
            const titulo = article.querySelector('h3').textContent;

            // Muestra un mensaje en la consola para simular la acción
            console.log(`Hiciste clic en 'Leer más' para la noticia/reseña: "${titulo}"`);

            // Aquí podrías agregar la lógica para:
            // 1. Redirigir a una nueva página de la noticia.
            // 2. Mostrar la noticia completa en un modal (ventana emergente).
            // 3. Cargar el contenido de la noticia de forma asíncrona.
        });
    });

    console.log('El script JS ha sido cargado y está listo.');
});