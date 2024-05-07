window.addEventListener('scroll', function() {
  var stickyDiv = document.getElementById('header');
  var contentDiv = document.getElementById('video-container');
  var stickyDivTop = stickyDiv.getBoundingClientRect().bottom;
  var contentDivBottom = contentDiv.getBoundingClientRect().bottom;

  if (stickyDivTop < contentDivBottom) {
    // Calculate the distance scrolled from the top to the content div
    var distanceScrolled = contentDivBottom - stickyDivTop;

    // Calculate the maximum distance the user can scroll to reach the content div
    var maxScrollDistance = contentDivBottom - window.innerHeight;

    // Calculate the opacity based on the scroll position
    var opacity = 1 - (distanceScrolled / maxScrollDistance);

    // Set the opacity of the sticky div
    stickyDiv.style.opacity = opacity < 0 ? 0 : opacity; // Ensure opacity is not negative
  } else {
    // If the sticky div is above the content, keep it fully visible
    stickyDiv.style.opacity = 1;
  }
});
  