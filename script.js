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

// ==========================================
// 1. NAVIGATION LOGIC (TABS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Remove 'active' class from all buttons and sections
            tabs.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Add 'active' class to the selected tab and section
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
            
            // Scroll to the top when changing tabs
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Initialize pagination once the DOM is fully loaded
    const projectCards = document.querySelectorAll('#projects .work-experience');
    if (projectCards.length > 0) {
        showProjectPage(currentProjPage);
    }
});

// ==========================================
// 2. PAGINATION LOGIC (PROJECTS)
// ==========================================
let currentProjPage = 1;
const projectsPerPage = 5;

function showProjectPage(page) {
    const projectCards = document.querySelectorAll('#projects .work-experience');
    const totalProjPages = Math.ceil(projectCards.length / projectsPerPage);
    
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;

    projectCards.forEach((card, index) => {
        if (index >= start && index < end) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Update button states and page indicator text
    document.getElementById('page-indicator').innerText = `Page ${page} of ${totalProjPages}`;
    document.getElementById('prev-btn').disabled = page === 1;
    document.getElementById('next-btn').disabled = page === totalProjPages;
}

function nextPage() {
    const projectCards = document.querySelectorAll('#projects .work-experience');
    const totalProjPages = Math.ceil(projectCards.length / projectsPerPage);

    if (currentProjPage < totalProjPages) {
        currentProjPage++;
        showProjectPage(currentProjPage);
        
        // Calculate dynamic scroll position to account for the sticky header
        const projectsSection = document.getElementById('projects');
        const headerHeight = document.querySelector('header').offsetHeight + 20; // 20px extra padding
        const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
    }
}

function prevPage() {
    if (currentProjPage > 1) {
        currentProjPage--;
        showProjectPage(currentProjPage);
        
        // Calculate dynamic scroll position to account for the sticky header
        const projectsSection = document.getElementById('projects');
        const headerHeight = document.querySelector('header').offsetHeight + 20; // 20px extra padding
        const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
    }
}
