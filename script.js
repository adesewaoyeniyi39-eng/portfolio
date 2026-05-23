/* ============================================================
   PORTFOLIO – VANILLA JS
   Oyeniyi Susanna Adesewa

   SECTIONS
   A. Mobile Menu — toggle open/close + keyboard accessibility
   B. Auto-close Mobile Menu on Resize
   C. Header Scroll Shadow
   D. Projects Data & Dynamic Card Rendering
   E. Footer Copyright Year
   ============================================================ */


/* ── A. Mobile Menu ───────────────────────────────────────── */

const hamburger = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

function closeMobileMenu() {
    mobileNav.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
        closeMobileMenu();
    } else {
        mobileNav.hidden = false;
        hamburger.setAttribute('aria-expanded', 'true');
    }
});

const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
});


/* ── B. Auto-close Mobile Menu on Resize ─────────────────── */

const DESKTOP_BREAKPOINT = 768;

window.addEventListener('resize', function () {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        closeMobileMenu();
    }
}, { passive: true });


/* ── C. Header Scroll Shadow ──────────────────────────────── */

const header = document.getElementById('site-header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
}, { passive: true });


/* ── D. Projects Data & Dynamic Card Rendering ────────────── */
/*
   TO ADD YOUR OWN PROJECTS:
   1. Save your screenshot as a JPEG or PNG, e.g. "my-project.jpg"
   2. Put it inside: assets/images/
   3. Update the "image" path below, e.g.: 'assets/images/my-project.jpg'
   4. Replace the title, description, tags, and link with your real details
*/
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A modern online shopping experience with seamless checkout and product management.',
        image: 'assets/images/project-ecommerce.svg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: '#'  // ← replace with your live project URL
    },
    {
        title: 'Portfolio Website',
        description: 'A sleek and responsive portfolio showcasing creative work and design projects.',
        image: 'assets/images/project-portfolio.svg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Mobile App Interface',
        description: 'An intuitive mobile-first design with smooth animations and user-friendly navigation.',
        image: 'assets/images/project-mobile.svg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    }
];

function createProjectCard(project) {
    const tagsHTML = project.tags
        .map(function (tag) {
            return '<span class="tag">' + tag + '</span>';
        })
        .join('');

    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
    <div class="project-img-wrap">
      <img
        src="${project.image}"
        alt="${project.title} project screenshot"
        width="800"
        height="480"
        loading="lazy"
      />
      <a href="${project.link}" class="project-link-icon" aria-label="View ${project.title} project">
        <img src="assets/icons/icon-external-link.svg" alt="" width="20" height="20" aria-hidden="true" />
      </a>
    </div>
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${tagsHTML}</div>
    </div>
  `;

    return card;
}

const projectsGrid = document.getElementById('projects-grid');
projects.forEach(function (project) {
    projectsGrid.appendChild(createProjectCard(project));
});


/* ── E. Footer Copyright Year ─────────────────────────────── */

const footerCopy = document.getElementById('footer-copy');
footerCopy.textContent = '© ' + new Date().getFullYear() + ' Oyeniyi Susanna Adesewa. All rights reserved.';
