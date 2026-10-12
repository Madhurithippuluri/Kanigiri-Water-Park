
document.addEventListener("DOMContentLoaded", function () {
  // Automatically update the copyright year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth navigation for internal page links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

          history.replaceState(null, "", targetId);
        }
      }
    });
  });
});

/* Reveal website sections when they enter the screen */

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".section-head, .ride-card, .rain-section, .visit-card, .contact"
  );

  // Add the reveal class to the selected elements
  animatedElements.forEach(function (element) {
    element.classList.add("reveal");
  });

  // Show elements when they enter the viewport
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries, currentObserver) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    animatedElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    // Fallback for older browsers
    animatedElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }
});
