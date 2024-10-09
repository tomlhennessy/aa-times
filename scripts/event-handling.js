window.addEventListener('DOMContentLoaded', () => {
  console.log('event-handling.js script was successfully loaded');

  // select the gear icon element
  const cogIcon = document.querySelector('.fas.fa-cog');

  // toggle dropdown menu on gear icon click
  cogIcon.addEventListener('click', event => {
    console.log('Gear clicked');
    event.stopPropagation(); // prevent the event from bubbling up
    document.querySelector('.pref').classList.remove('pref--hidden');
  });

  // hide the dropdown when clicking outside
  window.addEventListener('click', () => {
    console.log('HTML document clicked');
    document.querySelector('.pref').classList.add('pref--hidden');
  });

  // additional logic for search modal toggle (not related to dropdown)
  const searchIcon = document.querySelector('.fa.fa-search');
  searchIcon.addEventListener('click', () => {
    console.log('Search clicked');
    const modal = document.querySelector('.search-modal');
    modal.classList.toggle('search-modal--hidden');
  });
});
