/* ========================================
   DOM Elements
   ======================================== */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');

/* ========================================
   Project Data
   Each project defines only the links it actually has —
   the modal never renders a dead "#" link.
   ======================================== */
const projectsData = {
    mtaanifix: {
        title: 'MtaaniFix',
        image: 'assets/mtaanifix.png',
        alt: 'MtaaniFix marketplace connecting clients to verified fundis in Kenya',
        description: 'MtaaniFix is a two-sided service marketplace connecting clients with verified skilled tradespeople (fundis) across Kenya -plumbers, electricians, and other home-service professionals. I designed and built the entire platform solo as my final-year project: a booking state machine (pending → quoted → confirmed → in progress → completed), staged contact reveal to prevent off-platform circumvention, in-app chat, and a commission and verified-badge system. In production it runs on Azure App Service with Azure Database for MySQL Flexible Server, fronted by Cloudflare for CDN and WAF protection, deployed through GitHub Actions CI/CD. Backend and infrastructure optimization brought average response time down from roughly 2.8s to 83ms.',
        tech: 'Laravel • Blade • MySQL (Azure Flexible Server) • Cloudflare • GitHub Actions',
        role: 'Sole Developer -full-stack build, database design, cloud infrastructure, deployment, and platform integrity systems.',
        demoUrl: 'https://mtaanifix.tech',
        demoLabel: 'Visit Live Site',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER',
        repoLabel: 'GitHub Profile'
    },
    sitegred: {
        title: 'SiteGred',
        image: 'assets/sitegred.png',
        alt: 'SiteGred worker management and payroll platform dashboard',
        description: 'SiteGred (formerly SiteGrid) is a worker management and payroll system built for construction, agriculture, and events businesses in Kenya. It handles GPS- and photo-verified attendance, automated payroll calculation, M-Pesa B2C disbursements straight to workers, and USSD access for workers without smartphones. The platform earned recognition at KCA University\'s Tech Expo and was presented at Innovation Week.',
        tech: 'Laravel • Blade • MySQL • M-Pesa Daraja API',
        role: 'Sole Developer -backend architecture, payroll logic, M-Pesa integration, and UI design.',
        demoUrl: null,
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER',
        repoLabel: 'GitHub Profile'
    },
    kenswed: {
        title: 'Kenswed -School Management System',
        image: 'assets/kenswed-dashboard.png',
        alt: 'Kenswed dashboard screenshot',
        description: 'A comprehensive web-based school management system designed to streamline educational administration. Kenswed allows schools to manage student registration, track exam schedules, enter live results, and generate detailed reports, with an admin dashboard for staff and real-time access to student performance data.',
        tech: 'PHP • MySQL • Bootstrap • Chart.js • XAMPP',
        role: 'Lead Developer -database design, admin dashboard, results release workflow, and reporting modules.',
        demoUrl: 'https://kssms.vercel.app/',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER',
        repoLabel: 'GitHub Profile'
    },
    'ai-attendance': {
        title: 'AI Attendance System',
        image: 'assets/ai-attendance.png',
        alt: 'AI Attendance System screenshot',
        description: 'An attendance tracking system using facial recognition for automated check-ins. The system identifies and verifies individuals and automatically records attendance with timestamp data. Built with React and TypeScript for a type-safe frontend that communicates with a facial recognition API.',
        tech: 'React • TypeScript • Facial Recognition API • REST API',
        role: 'Frontend Developer -React components, API integration, state management, and responsive UI.',
        demoUrl: null,
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER',
        repoLabel: 'GitHub Profile'
    },
    'password-manager': {
        title: 'Password Manager',
        image: 'assets/password-manager.png',
        alt: 'Password Manager application screenshot',
        description: 'A secure desktop application built with Java for storing and managing credentials locally. Features encrypted credential storage using AES encryption, a password generator, edit/delete functionality, and encrypted backups of the vault.',
        tech: 'Java • Swing • AES Encryption • File I/O',
        role: 'Lead Developer -Swing UI, AES encryption module, encrypted backup functionality.',
        demoUrl: null,
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER',
        repoLabel: 'GitHub Profile'
    },
    atm: {
        title: 'ATM System',
        image: 'assets/atm-system.png',
        alt: 'ATM System screenshot',
        description: 'A desktop banking application that simulates ATM operations: secure authentication, account management, deposits and withdrawals, balance inquiry, transaction history, and mini-statement generation. Built with Visual Basic and SQLite for local data storage.',
        tech: 'Visual Basic • SQLite • MS Access • CRUD Operations',
        role: 'Lead Developer -banking operations, security features, database schema, and UI.',
        demoUrl: null,
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER/AtmSystem_VB.NET',
        repoLabel: 'View Repository'
    },
    speedtest: {
        title: 'Speed Test',
        image: 'assets/speedtest.png',
        alt: 'Speed Test application screenshot',
        description: 'A web-based internet speed testing application that measures download speed, upload speed, and ping latency, with a clean interface and visual result graphs.',
        tech: 'HTML5 • CSS3 • JavaScript • Web APIs',
        role: 'Lead Developer -UI/UX, speed testing logic, and results visualization.',
        demoUrl: 'https://netspeed-test.vercel.app/',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER/Net_SpeedTest',
        repoLabel: 'View Repository'
    },
    'client-portfolio': {
        title: 'Client Portfolio Website',
        image: 'assets/client-portfolio.png',
        alt: 'Client portfolio website screenshot',
        description: 'A professional portfolio website designed and developed for a client, with smooth scroll animations, responsive design, contact form integration, and optimized performance.',
        tech: 'HTML5 • CSS3 • JavaScript • Responsive Design',
        role: 'Frontend Developer -full design and development, responsive implementation, animation effects, client collaboration.',
        demoUrl: 'https://evelynk-portfolio.vercel.app/',
        demoLabel: 'View Live',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER/Evelyn_Portfolio',
        repoLabel: 'View Repository'
    }
};

/* ========================================
   Mobile Menu Toggle
   ======================================== */
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

/* ========================================
   Project Modal Functionality
   ======================================== */
let lastFocusedElement = null;

projectCards.forEach(card => {
    card.addEventListener('click', () => openProjectFromCard(card));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectFromCard(card);
        }
    });
});

function openProjectFromCard(card) {
    const projectKey = card.getAttribute('data-project');
    const project = projectsData[projectKey];
    if (project) {
        lastFocusedElement = card;
        openProjectModal(project);
    }
}

function openProjectModal(project) {
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.alt;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalTech').textContent = project.tech;
    document.getElementById('modalRole').textContent = project.role;

    const linksDiv = document.getElementById('modalLinks');
    linksDiv.innerHTML = '';

    if (project.demoUrl) {
        const demoLink = document.createElement('a');
        demoLink.href = project.demoUrl;
        demoLink.target = '_blank';
        demoLink.rel = 'noopener noreferrer';
        demoLink.innerHTML = `<i class="fas fa-external-link-alt"></i> ${project.demoLabel || 'Live Demo'}`;
        linksDiv.appendChild(demoLink);
    }

    if (project.repoUrl) {
        const repoLink = document.createElement('a');
        repoLink.href = project.repoUrl;
        repoLink.target = '_blank';
        repoLink.rel = 'noopener noreferrer';
        repoLink.innerHTML = `<i class="fab fa-github"></i> ${project.repoLabel || 'View Repository'}`;
        linksDiv.appendChild(repoLink);
    }

    if (!project.demoUrl && !project.repoUrl) {
        const note = document.createElement('span');
        note.textContent = 'Case study -links coming soon';
        linksDiv.appendChild(note);
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

modalClose.addEventListener('click', closeProjectModal);

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

/* ========================================
   Contact Form Submission
   ======================================== */
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showToast('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }

    try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        const response = await fetch('https://formspree.io/f/xreapelo', {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });

        const data = await response.json();

        if (response.ok) {
            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            const errorMsg = data.errors ? data.errors.map(err => err.message).join(', ') : 'Failed to send message. Please try again.';
            showToast(errorMsg, 'error');
            console.error('Formspree error:', data);
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('An error occurred. Please try again later.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/* ========================================
   Intersection Observer for Reveal Animations
   ======================================== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-category, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
}

/* ========================================
   Prefetch Project Images
   ======================================== */
window.addEventListener('load', () => {
    Object.values(projectsData).forEach(project => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = project.image;
        document.head.appendChild(link);
    });
});

/* ========================================
   Coming Soon Social Link Handler
   ======================================== */
document.querySelectorAll('.coming-soon-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.getAttribute('data-platform');
        showToast(`${platform} profile coming soon`);
    });
});

/* ========================================
   Toast Notification
   ======================================== */
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';

    if (type === 'success') toast.classList.add('toast-success');
    if (type === 'error') toast.classList.add('toast-error');

    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

/* ========================================
   Load More Projects
   ======================================== */
const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenProjects = document.querySelectorAll('.project-card.hidden-project');
let projectsVisible = false;

loadMoreBtn.addEventListener('click', () => {
    projectsVisible = !projectsVisible;

    hiddenProjects.forEach(project => {
        project.classList.toggle('show', projectsVisible);
        if (projectsVisible && !prefersReducedMotion) {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
                project.style.animation = 'slideUp 0.5s ease forwards';
            });
        }
    });

    if (projectsVisible) {
        loadMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less Projects';
        loadMoreBtn.setAttribute('aria-expanded', 'true');
    } else {
        loadMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Load More Projects';
        loadMoreBtn.setAttribute('aria-expanded', 'false');
    }
});

/* ========================================
   Theme Toggle (Dark/Light Mode)
   ======================================== */
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

const savedTheme = localStorage.getItem('theme');
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(savedTheme || (systemPrefersLight ? 'light' : 'dark'));

themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
});

console.log('Portfolio loaded successfully v2.0');
