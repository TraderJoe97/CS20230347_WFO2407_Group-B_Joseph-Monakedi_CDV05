document.addEventListener('DOMContentLoaded', () => {
    // nav-menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('-translate-y-full');  // Slide menu up or down
        navMenu.classList.toggle('translate-y-0');      // Show menu

        // Toggle the icon between hamburger and cross
        if (menuIcon.textContent === '\u2630') {  // Hamburger icon (&#9776;)
            menuIcon.textContent = '\u2715';      // Cross icon (&#10005;)
        } else {
            menuIcon.textContent = '\u2630';
        }
    });
    
 
    // Populate content
    document.getElementById('logo').textContent = data.name;
    document.getElementById('hero-title').textContent = data.heroTitle;
    document.getElementById('hero-subtitle').textContent = data.heroSubtitle;
    document.getElementById('avatar').src = data.avatar;
    document.getElementById('avatar').alt = data.name;
    document.getElementById('about-name').textContent = data.name;
    document.getElementById('about-title').textContent = data.jobTitle;
    document.getElementById('about-description').textContent = data.aboutMe;


    // Populate skills
    const skillsContainer = document.getElementById('skills');
    data.skills.forEach(skill => {
        const skillSpan = document.createElement('span');
        skillSpan.className = 'bg-monochrome-gray-200 dark:bg-monochrome-gray-700 px-3 py-1 rounded-full text-sm';
        skillSpan.textContent = skill;
        skillsContainer.appendChild(skillSpan);
    });

    // Populate projects
    const projectsGrid = document.getElementById('projects-grid');
    data.projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'bg-monochrome-light dark:bg-monochrome-gray-800 rounded-lg overflow-hidden shadow-md';
        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-monochrome-gray-600 dark:text-monochrome-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap space-x-2">
                    ${project.technologies ? project.technologies.map(tech => `<span class="bg-monochrome-gray-200 dark:bg-monochrome-gray-700 px-3 py-1 rounded-full text-sm">${tech}</span>`).join('') : ''}
                </div>
                <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                    <a href="${project.liveSite}" target="_blank" rel="noopener noreferrer" class="block">
                        <button class="bg-monochrome-dark dark:bg-monochrome-light text-monochrome-light dark:text-monochrome-dark px-4 py-2 rounded hover:bg-monochrome-gray-700 dark:hover:bg-monochrome-gray-200 transition-colors flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" fill="currentColor" class="h-5 w-5 mr-2">
                                <path d="M32.9,17.3c-4.7,2.6-8.1,6.3-10.5,11.3h10.4L32.9,17.3z M33.9,13.9c0.2,0,0.3,0,0.5,0c10.9,0,20.3,5.8,25.6,14.5  c1.6,2.6,2.7,5.5,3.4,8.6h22.4c0.6,0,1,0.3,1,0.7V69c0,0.1,0,0.1,0,0.2l0,0l8.3,12.1c0,0.6-0.5,2-1.1,2H25.7c-0.6,0-1.1-1.4-1.1-2  l5.5-8.5c-14.3-2-25.4-14.4-25.4-29.3C4.8,38,6.3,32.6,9,28.3C14.2,19.7,23.3,14,33.9,13.9z M84,66.4V40.2c0-0.3-0.4-0.6-0.9-0.6  H63.8h-2.5H50.9h-2.5H36.7c-0.5,0-0.9,0.3-0.9,0.6v1.6v2.5l0,0v10.6l0,0v2.5v9.1c0,0.4,0.4,0.6,0.9,0.6h1.1h3.5h6.5h3.9h0.7H70h3.2  H83C83.5,67.2,84,66.9,84,66.4z M50.7,36.9h10.2c-0.5-2.1-1.3-4-2.2-5.8h-9.4C49.8,33,50.4,34.8,50.7,36.9z M48.3,28.6h8.9  c-4.1-6.3-10.7-10.6-18.4-11.9C43,19.6,46.2,23.8,48.3,28.6z M35.7,36.9h12.4c-0.3-2.1-0.8-4-1.6-5.8H35.7V36.9z M35.7,28.6h9.8  c-2.2-4.6-5.5-8.3-9.8-11V28.6z M32.9,31.1H21.5c-1,2.8-1.7,5.9-1.9,9.2c0,0.5-0.1,1-0.1,1.5h13.4V31.1z M32.7,69.1V69V57.4h-9.8  c2.3,4.6,5.6,8.7,9.8,11.8C32.7,69.1,32.7,69.1,32.7,69.1z M32.7,54.9V44.2H19.5c0.2,3.8,0.9,7.3,2.3,10.6H32.7z M30,70.3  c-4.3-3.4-7.6-7.9-9.9-12.9H11C15.1,64.2,22,69,30,70.3z M19.7,28.6c2.1-4.7,5.2-8.7,9.2-11.7c-7.1,1.5-13.3,5.7-17.1,11.7H19.7z   M9.8,54.9h9.4c-1.3-3.3-2-7-2.1-10.6H7.4C7.4,48,8.2,51.6,9.8,54.9z M18.7,31.1h-8.5C8.6,34.3,7.6,38,7.4,41.7H17  c0-0.5,0-1.1,0.1-1.7C17.2,36.9,17.8,33.9,18.7,31.1z"/>
                                <rect x="38.9" y="42.4" width="41.3" height="5.8"/>
                                <polygon points="78.6,57.1 76.2,58.3 78,61.8 76.4,62.6 74.6,59.2 72.3,60.3 71.4,50.9"/>
                                <path d="M65.6,58l-0.1-0.1l0,0C65.6,57.9,65.6,58,65.6,58z M66.1,51V64H39V51H66.1z M54.7,58C54.7,57.9,54.8,57.9,54.7,58L54.7,58  C54.8,57.9,54.7,57.9,54.7,58z"/>
                            </svg>
                            Live Site
                        </button>
                     </a>
                    <a href="${project.githubRepo}" target="_blank" rel="noopener noreferrer" class="block">
                        <button class="bg-monochrome-dark dark:bg-monochrome-light text-monochrome-light dark:text-monochrome-dark px-4 py-2 rounded hover:bg-monochrome-gray-700 dark:hover:bg-monochrome-gray-200 transition-colors flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            GitHub Repo
                        </button>
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectDiv);
    });

    // Populate contact links
    const contactLinksContainer = document.getElementById('contact-links');
    data.contactLinks.forEach(link => {
        const linkA = document.createElement('a');
        linkA.href = link.url;
        linkA.target = '_blank';
        linkA.rel = 'noopener noreferrer';
        linkA.className = 'flex items-center justify-center bg-monochrome-gray-200 dark:bg-monochrome-gray-700 px-4 py-2 rounded-full hover:bg-monochrome-gray-300 dark:hover:bg-monochrome-gray-600 transition-colors';
        linkA.innerHTML = `
            ${link.icon}
            ${link.text}
        `;
        contactLinksContainer.appendChild(linkA);
    });

    // Theme switcher
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
    // Theme switcher mobile
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    const themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIconMobile.classList.remove('hidden');
    } else {
        themeToggleDarkIconMobile.classList.remove('hidden');
    }

    themeToggleBtnMobile.addEventListener('click', function() {
        themeToggleDarkIconMobile.classList.toggle('hidden');
        themeToggleLightIconMobile.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
})
