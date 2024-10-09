window.addEventListener('DOMContentLoaded', () => {
  console.log('event-handling.js script was successfully loaded');

  // Toggle the dropdown menu when the gear icon is clicked (from Phase 6)
  const cogIcon = document.querySelector('.fas.fa-cog');
  cogIcon.addEventListener('click', event => {
    event.stopPropagation();
    document.querySelector('.pref').classList.remove('pref--hidden');
  });

  // Hide dropdown menu when clicking outside of it
  window.addEventListener('click', () => {
    document.querySelector('.pref').classList.add('pref--hidden');
  });

  // Select the search icon and search modal
  const searchIcon = document.querySelector('.fa.fa-search');
  const searchModal = document.querySelector('.search-modal');

  // Toggle the search modal visibility when the search icon is clicked
  searchIcon.addEventListener('click', (event) => {
    console.log('Search clicked');
    event.stopPropagation(); // Prevent event from bubbling up
    searchModal.classList.toggle('search-modal--hidden'); // Toggle the class
  });

  // Hide search modal when clicking outside of it
  window.addEventListener('click', () => {
    if (!searchModal.classList.contains('search-modal--hidden')) {
      searchModal.classList.add('search-modal--hidden');
    }
  });
});
