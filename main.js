const menuBtn = document.querySelector(".menu-btn-open");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".menu-btn-close");

menuBtn.addEventListener("click", () => {
  navLinks.classList.add("open");
  menuBtn.classList.add("open");
  closeBtn.classList.add("close");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtn.classList.remove("open");
  closeBtn.classList.remove("close");
});
