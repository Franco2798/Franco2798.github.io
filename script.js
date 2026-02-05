document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Quitar active de todos los botones y secciones
            tabs.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Agregar active al seleccionado
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
            
            // Hacer scroll hacia arriba al cambiar de pestaña
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
