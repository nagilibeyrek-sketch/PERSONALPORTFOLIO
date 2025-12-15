// Main JS for the portfolio site.
// Keep this small. It handles mobile nav toggles and dynamic year insertion.
document.addEventListener('DOMContentLoaded', function () {
  // Toggle mobile navs: find all .nav-toggle buttons and connect to their nav via data-target
  var toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(function (btn) {
    var targetId = btn.getAttribute('data-target');
    if (!targetId) return;
    var nav = document.getElementById(targetId);
    btn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Set current year in all footer year spans (IDs start with 'year')
  var yearElements = document.querySelectorAll('[id^=year]');
  var now = new Date().getFullYear();
  yearElements.forEach(function (el) { el.textContent = now; });
});

/* Comments:
 - This script is intentionally minimal to keep the project accessible and beginner-friendly.
 - Add more functionality as you learn JS (e.g., form handling, lightboxes).
 */