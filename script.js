const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = new FormData(contactForm);
    const name = encodeURIComponent(form.get('name') || '');
    const email = encodeURIComponent(form.get('email') || '');
    const message = encodeURIComponent(form.get('message') || '');

    const recipient = 'guardweavelabs@gmail.com';
    const subject = encodeURIComponent('GuardWeave Labs pilot inquiry');
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = 'Your email client should open with a prepared inquiry addressed to GuardWeave Labs.';
    }
  });
}
