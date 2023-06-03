'use strict';

// Create selectors
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

// Select elements
const btnScrollTo = select('.btn--scroll-to');
const section1 = select('#section--1');
const navLinks = select('.nav__links');
const nav = select('.nav');

// Scroll smoothly to section 1 on clicking learn more button
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Apply events delegation
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    select(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Build tabbed components
const tabContainer = select('.operations__tab-container');
const tabs = selectAll('.operations__tab');
const tabContents = selectAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabContents.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );
  select(`.operations__content--${clicked.dataset.tab}`).classList.add(
    'operations__content--active'
  );
});

// Fade navigation components
