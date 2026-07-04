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

    // Replace this placeholder with the official Guardweave Labs email address before deployment.
    const recipient = 'hello@guardweavelabs.com';
    const subject = encodeURIComponent('PUFGuard OEM pilot inquiry');
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = 'Your email client should open with a prepared inquiry. Replace the placeholder recipient before publishing the website.';
    }
  });
}
