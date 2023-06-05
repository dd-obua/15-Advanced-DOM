'use strict';

// Create selectors
const select = (element, selector) => element.querySelector(selector);
const selectAll = (element, selector) => element.querySelectorAll(selector);

// Select elements
const btnScrollTo = select(document, '.btn--scroll-to');
const section1 = select(document, '#section--1');
const navLinks = select(document, '.nav__links');
const nav = select(document, '.nav');
const header = select(document, '.header');

// Scroll smoothly to section 1 on clicking learn more button
btnScrollTo.addEventListener('click', event => {
  event.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Apply events delegation
navLinks.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    select(document, id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Build tabbed components
const tabContainer = select(document, '.operations__tab-container');
const tabs = selectAll(document, '.operations__tab');
const tabContents = selectAll(document, '.operations__content');

tabContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabContents.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  select(
    document,
    `.operations__content--${clicked.dataset.tab}`
  ).classList.add('operations__content--active');
});

// Fade navigation components
const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Create sticky navigation bar
