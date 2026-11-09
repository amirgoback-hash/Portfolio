// Dynamic Project Data
const projectData = {
    project1: {
        title: "MindFlow — Decision & Consistency Platform",
        description: "A specialized app concept & architecture tailored for student decision-making, habit tracking, and performance analysis with modular workflow engines.",
        tech: ["Product Architecture", "Python", "UX/UI Draft", "Data Structures"],
        github: "https://github.com/amirgoback-hash/mindflow",
        demo: "#"
    },
    project2: {
        title: "Real-time Chess Club Management",
        description: "A production-grade mobile solution built with Flutter & Firebase Firestore featuring full CRUD operations, live player ratings, and interactive match scheduling.",
        tech: ["Flutter", "Dart", "Firebase Firestore", "Authentication"],
        github: "https://github.com/amirgoback-hash/chess-club-app",
        demo: "#"
    },
    project3: {
        title: "Lab Management & Automation Tools",
        description: "Custom Linux shell scripts and automation workflows developed for Rajuk Uttara Model College ICT lab maintenance, batch user provision, and system health checks.",
        tech: ["Linux Shell", "Bash Scripting", "Python", "System Admin"],
        github: "https://github.com/amirgoback-hash/lab-automation",
        demo: "#"
    },
    project4: {
        title: "Personal Developer Showcase",
        description: "An ultra-sleek, accessible, dark/light theme supporting developer portfolio featuring crisp modals, responsive CSS grid layout, and zero third-party framework overhead.",
        tech: ["HTML5", "CSS3", "JavaScript ES6+", "GitHub Pages"],
        github: "https://github.com/amirgoback-hash",
        demo: "https://amirgoback-hash.github.io"
    }
};

// Modal Trigger Functions
function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDescription').innerText = data.description;
    
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.innerText = t;
        techContainer.appendChild(span);
    });

    document.getElementById('modalGithub').href = data.github;
    const modalDemo = document.getElementById('modalDemo');
    if (modalDemo) {
        modalDemo.href = data.demo;
    }

    const modal = document.getElementById('projectModal');
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Global click event to dismiss modal
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Dark / Light Theme Toggle Setup
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const bodyElement = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        bodyElement.classList.add('light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            bodyElement.classList.toggle('light-mode');
            
            if (bodyElement.classList.contains('light-mode')) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});