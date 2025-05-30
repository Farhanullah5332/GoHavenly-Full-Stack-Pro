// Add active class to nav items on click
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const alerts = document.querySelectorAll(".custom-alert");

  alerts.forEach(alert => {
    const closeBtn = alert.querySelector(".close-alert");

    // Manually dismiss
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        alert.classList.add("hidden");
      });
    }

    // Auto-dismiss after 10 seconds
    setTimeout(() => {
      alert.classList.add("hidden");
    }, 10000);
  });
});



// Function to filter listings by category
function filterByCategory(category) {
  window.location.href = `/listings?category=${encodeURIComponent(category)}`;
}

