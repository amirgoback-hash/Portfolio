const projectData = {
    project1: {
        title: "Lab Management & Automation",
        description: "Designed for managing computing lab environments, tracking hardware assets, and automating routine setup tasks for ICT demonstration classes.",
        tech: ["HTML/CSS", "JavaScript", "Linux Scripts"],
        github: "https://github.com/amirgoback-hash"
    },
    project2: {
        title: "Personal Portfolio Website",
        description: "A fast, ultra-sleek personal developer showcase built with pure HTML, CSS, and JS, featuring smooth scroll interactions and GitHub Pages deployment.",
        tech: ["HTML5", "CSS3", "JavaScript", "Git"],
        github: "https://github.com/amirgoback-hash"
    }
};

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDescription').innerText = data.description;
    
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
        const span = document.createElement('span');
        span.innerText = t;
        techContainer.appendChild(span);
    });

    document.getElementById('modalGithub').href = data.github;
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
};