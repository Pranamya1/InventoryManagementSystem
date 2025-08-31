// Notification Panel Toggle
document.addEventListener("DOMContentLoaded", () => {
  const bellIcon = document.getElementById("notification-bell");
  const panel = document.getElementById("notification-panel");
  const overlay = document.getElementById("notification-overlay");
  const closeBtn = document.getElementById("close-btn");

  function openPanel() {
    panel.classList.add("open");
    overlay.classList.add("active");
  }

  function closePanel() {
    panel.classList.remove("open");
    overlay.classList.remove("active");
  }

  bellIcon.addEventListener("click", (event) => {
    event.preventDefault();
    openPanel();
  });

  closeBtn.addEventListener("click", closePanel);

  overlay.addEventListener("click", closePanel);
});
