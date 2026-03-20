document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");
  const cards = document.querySelectorAll(".card");

  function sendHeightToParent() {
    const height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );

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

      setTimeout(sendHeightToParent, 250);
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("flip");

      setTimeout(sendHeightToParent, 250);
    });
  });

  window.addEventListener("load", sendHeightToParent);
  window.addEventListener("resize", sendHeightToParent);

  setTimeout(sendHeightToParent, 100);
  setTimeout(sendHeightToParent, 500);
});
