document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");
  const cards = document.querySelectorAll(".card");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("flip");
    });
  });
});