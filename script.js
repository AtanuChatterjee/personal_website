document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 50,
      behavior: "smooth",
    });
  });
});
