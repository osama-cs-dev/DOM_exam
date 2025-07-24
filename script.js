document.addEventListener('DOMContentLoaded', () => {
  const navbarList = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = section.dataset.nav;
    a.href = `#${section.id}`;
    a.className = 'menu__link';
    a.addEventListener('click', e => {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    });
    li.appendChild(a);
    navbarList.appendChild(li);
  });

  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const link = document.querySelector(`a[href="#${section.id}"]`);
      if (rect.top <= 150 && rect.bottom >= 150) {
        document.querySelectorAll('section').forEach(s => s.classList.remove('your-active-class'));
        section.classList.add('your-active-class');
        document.querySelectorAll('.menu__link').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
});
