// Add this to your JavaScript file or within a script tag in your HTML

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});