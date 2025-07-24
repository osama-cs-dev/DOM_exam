document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar list and sections
    const navbarList = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');
    

    // Inject styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            font-family: 'Merriweather', serif;
            color: #fff;
            background: linear-gradient(0deg, #88cba3 0%, #000d3c 100%);
        }
        .page__header {
            background: #fff;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 5;
        }
        #navbar__list {
            padding: 0;
            margin: 0;
            text-align: right;
        }
        .navbar__menu li {
            display: inline-block;
            margin: 10px;
            padding: 10px;
        }
        .menu__link {
            color: #000;
            text-decoration: none;
            font-weight: 800;
            padding: 10px;
            display: block;
        }
        .menu__link:hover {
            background: #333;
            color: #fff;
            transition: ease 0.3s all;
        }
        .menu__link.active {
            background: #333;
            color: #fff;
        }
        main {
            margin: 10vh 1em;
        }
        section {
            min-height: 80vh;
            scroll-margin-top: 50px;
        }
        .landing__container {
            padding: 2em;
            max-width: 50em;
            margin: 0 auto;
        }
        h1 {
            font-family: 'Fira Sans', sans-serif;
            font-size: 3em;
            margin: 2em 1rem;
        }
        h2 {
            font-family: 'Oxygen', sans-serif;
            font-size: 2.5em;
            color: #fff;
            border-bottom: 1px solid #cc1;
        }
        p {
            line-height: 1.6em;
            color: #eee;
        }
        .your-active-class {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
        }
        #myBtn {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 30px;
            z-index: 99;
            font-size: 18px;
            border: none;
            outline: none;
            background-color: red;
            color: white;
            cursor: pointer;
            padding: 15px;
            border-radius: 4px;
        }
        #myBtn:hover {
            background-color: #555;
        }
        @media (min-width: 35em) {
            h1 {
                font-size: 5em;
                margin: 2em 4rem 1em;
            }
            .landing__container {
                padding: 3em;
            }
        }
    `;
    document.head.appendChild(style);

    // Function to create navbar items dynamically
    function createNavbar() {
        navbarList.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        sections.forEach((section, index) => {
            const sectionId = section.id || `section${index + 1}`;
            const sectionName = section.querySelector('h2')?.textContent.trim() || `Section ${index + 1}`;
            
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${sectionId}`;
            link.textContent = sectionName;
            link.className = 'menu__link';
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
            });
            
            li.appendChild(link);
            fragment.appendChild(li);
        });
        
        navbarList.appendChild(fragment);
    }
    
    // Function to handle active section highlighting
  
    
    // Create navbar on page load
    createNavbar();
    
    // Add scroll event listener
    window.addEventListener('scroll', setActiveSection);
    
    // Handle "Back to Top" button
    window.addEventListener('scroll', () => {
        topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    
    topButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
