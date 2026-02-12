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
   ======================================== */
const projectsData = {
    kenswed: {
        title: 'Kenswed - School Management System',
        image: 'assets/kenswed-dashboard.png',
        alt: 'Kenswed dashboard screenshot',
        description: 'A comprehensive web-based school management system designed to streamline educational administration. Kenswed allows schools to efficiently manage student registration, track exam schedules, enter live results, and generate detailed reports. The system provides an intuitive admin dashboard for staff and real-time access to student performance data.',
        tech: 'PHP • MySQL • Bootstrap • Chart.js • XAMPP',
        role: 'Lead Developer — Responsible for database design, admin dashboard development, results release workflow, and report generation modules.',
        demoUrl: '#',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER'
    },
    'password-manager': {
        title: 'Password Manager',
        image: 'assets/password-manager.png',
        alt: 'Password Manager application screenshot',
        description: 'A secure desktop application built with Java for storing and managing credentials locally. Features include encrypted credential storage using AES encryption, password generator for creating strong passwords, edit/delete functionality, and the ability to create encrypted backups of the vault.',
        tech: 'Java • Swing • AES Encryption • File I/O',
        role: 'Lead Developer — Designed user interface with Swing, implemented AES encryption module, and managed encrypted backup functionality.',
        demoUrl: '#',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER'
    },
    atm: {
        title: 'ATM System',
        image: 'assets/atm-system.png',
        alt: 'ATM System screenshot',
        description: 'A desktop banking application that simulates ATM operations. The system provides secure user authentication, account management, cash deposits and withdrawals, balance inquiry, transaction history, and mini-statement generation. Built with Visual Basic and SQLite for reliable local data storage.',
        tech: 'Visual Basic • SQLite • MS Access • CRUD Operations',
        role: 'Lead Developer — Implemented all banking operations, security features, database schema design, and user interface development.',
        demoUrl: '#',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER/AtmSystem_VB.NET'
    },
    mtaanifix: {
        title: 'MtaaniFix',
        image: 'assets/mtaanifix.png',
        alt: 'MtaaniFix marketplace prototype',
        description: 'A marketplace prototype that connects clients with local tradespeople for home services such as plumbing, electrical work, and repairs. The platform enables service providers to showcase their skills and allows clients to browse, compare, and request services from vetted professionals in their area. Built with Laravel framework utilizing Blade templating engine.',
        tech: 'Laravel • Blade • MySQL • Bootstrap • PHP',
        role: 'Full-stack Developer — Designed responsive interface using Blade templates, implemented backend logic with Laravel, database design, and created prototype architecture.',
        demoUrl: '#',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER'
    },
    speedtest: {
        title: 'Speed Test',
        image: 'assets/speedtest.png',
        alt: 'Speed Test application screenshot',
        description: 'A web-based internet speed testing application that measures network performance. The tool tests download speed, upload speed, and ping latency, providing users with real-time feedback on their internet connection quality. Features a clean interface with visual representations of test results.',
        tech: 'HTML5 • CSS3 • JavaScript • Web APIs',
        role: 'Lead Developer — Designed UI/UX, implemented speed testing algorithms, created visual graphs for results display.',
        demoUrl: '#',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER/Net_SpeedTest'
    },
    'client-portfolio': {
        title: 'Client Portfolio Website',
        image: 'assets/client-portfolio.png',
        alt: 'Client portfolio website screenshot',
        description: 'A professional portfolio website designed and developed for a client to showcase their work, skills, and professional background. Features smooth scroll animations, responsive design across all devices, contact form integration, and optimized performance. The modern aesthetic and clean layout effectively present the client\'s professional brand.',
        tech: 'HTML5 • CSS3 • JavaScript • Responsive Design',
        role: 'Frontend Developer — Full website design and development, responsive implementation, animation effects, and client collaboration.',
        demoUrl: 'https://evelynk-portfolio.vercel.app/',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER/Evelyn_Portfolio'
    },
    'ai-attendance': {
        title: 'AI Attendance System',
        image: 'assets/ai-attendance.png',
        alt: 'AI Attendance System screenshot',
        description: 'An intelligent attendance tracking system leveraging facial recognition technology for automated check-ins. The system uses AI to identify and verify individuals, automatically recording attendance with timestamp data. Built with React and TypeScript for a robust, type-safe frontend that communicates with facial recognition APIs. Ideal for schools, offices, and events requiring contactless attendance management.',
        tech: 'React • TypeScript • Facial Recognition API • REST API • CSS3',
        role: 'Frontend Developer — Designed and implemented React components, integrated facial recognition API, managed state with TypeScript, and created responsive UI.',
        demoUrl: '#',
        repoUrl: 'https://github.com/JOHN-ITDEVELOPER'
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

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

/* ========================================
   Project Modal Functionality
   ======================================== */
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        const project = projectsData[projectKey];
        
        if (project) {
            openProjectModal(project);
        }
    });
});

function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.alt;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalTech').textContent = project.tech;
    document.getElementById('modalRole').textContent = project.role;
    
    // Create links
    const linksDiv = document.getElementById('modalLinks');
    linksDiv.innerHTML = '';
    
    if (project.repoUrl && !project.repoUrl.includes('REPO_URL')) {
        const repoLink = document.createElement('a');
        repoLink.href = project.repoUrl;
        repoLink.target = '_blank';
        repoLink.rel = 'noopener noreferrer';
        repoLink.innerHTML = '<i class="fab fa-github"></i> View Repository';
        linksDiv.appendChild(repoLink);
    } else {
        const comingSoon = document.createElement('span');
        comingSoon.style.color = 'var(--text-muted)';
        comingSoon.textContent = 'Repository coming soon';
        linksDiv.appendChild(comingSoon);
    }
    
    if (project.demoUrl && !project.demoUrl.includes('REPO_URL')) {
        const demoLink = document.createElement('a');
        demoLink.href = project.demoUrl;
        demoLink.target = '_blank';
        demoLink.rel = 'noopener noreferrer';
        demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
        linksDiv.appendChild(demoLink);
    }
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeProjectModal);

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
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
    
    // Validation
    if (!name || !email || !message) {
        showToast('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    try {
        // Show loader
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        const response = await fetch('https://formspree.io/f/xreapelo', {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            // Show specific error from Formspree if available
            const errorMsg = data.errors ? data.errors.map(e => e.message).join(', ') : 'Failed to send message. Please try again.';
            showToast(errorMsg, 'error');
            console.error('Formspree error:', data);
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('An error occurred. Please try again later.', 'error');
    } finally {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/* ========================================
   Smooth Scroll Enhancement
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            // Allow default smooth scroll behavior (defined in CSS)
        }
    });
});

/* ========================================
   Intersection Observer for Animations
   ======================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to skill cards and project cards on scroll
document.querySelectorAll('.skill-category, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

/* ========================================
   Prefetch Images for Performance
   ======================================== */
window.addEventListener('load', () => {
    // Prefetch project images
    const projectImages = [
        'assets/kenswed-dashboard.png',
        'assets/password-manager.png',
        'assets/library-app.png',
        'assets/mtaanifix.png'
    ];
    
    projectImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
});

/* ========================================
   Coming Soon Social Link Handler
   ======================================== */
const comingSoonLinks = document.querySelectorAll('.coming-soon-link');

comingSoonLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.getAttribute('data-platform');
        showToast(`${platform} profile coming soon! 🚀`);
    });
});

/* ========================================
   Toast Notification
   ======================================== */
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    
    // Add type-specific class
    if (type === 'success') {
        toast.classList.add('toast-success');
    } else if (type === 'error') {
        toast.classList.add('toast-error');
    }
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            toast.className = 'toast';
            toast.style.animation = '';
        }, 300);
    }, 3000);
}

/* ========================================
   Utility Functions
   ======================================== */
/* Load More Projects */
const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenProjects = document.querySelectorAll('.project-card.hidden-project');

let projectsVisible = false;

loadMoreBtn.addEventListener('click', () => {
    projectsVisible = !projectsVisible;
    
    hiddenProjects.forEach(project => {
        if (projectsVisible) {
            project.classList.add('show');
        } else {
            project.classList.remove('show');
        }
    });
    
    // Update button text and icon
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

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    document.body.classList.remove('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Update localStorage and icon
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Log version info
console.log('Portfolio loaded successfully v1.0');