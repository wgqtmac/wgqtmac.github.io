// Navigation is an enhancement: all content and anchor links work without JavaScript.
const links = [...document.querySelectorAll('.nav-links a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

function updateNavigation() {
  const offset = document.querySelector('.masthead').offsetHeight + 40;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) current = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = sections[sections.length - 1];
  }
  for (const link of links) {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('hashchange', updateNavigation);
window.addEventListener('resize', updateNavigation);
updateNavigation();
