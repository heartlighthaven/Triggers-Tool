document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");
  const cards = document.querySelectorAll(".card");

  function sendHeightToParent() {
    const height = document.documentElement.scrollHeight;

    window.parent.postMessage(
      {
        type: "triggerToolHeight",
        height: height
      },
      "*"
    );
  }

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");
      setTimeout(sendHeightToParent, 350);
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("flip");
      setTimeout(sendHeightToParent, 350);
    });
  });

  window.addEventListener("load", function () {
    setTimeout(sendHeightToParent, 400);
  });
});
