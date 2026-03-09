// course module
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".module-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const description = this.querySelector(".module-content");
      const icon = this.querySelector(
        ".fa-solid.fa-angle-down, .fa-solid.fa-angle-up",
      );
      if (description) {
        description.classList.toggle("hidden");
      }
      if (icon && description) {
        if (description.classList.contains("hidden")) {
          icon.classList.replace("fa-angle-up", "fa-angle-down");
        } else {
          icon.classList.replace("fa-angle-down", "fa-angle-up");
        }
      }
    });
  });
});

// faq
document.addEventListener("DOMContentLoaded", () => {
  const faqWrappers = document.querySelectorAll(
    ".relative.rounded-2xl.p-\\[2px\\]",
  );
  faqWrappers.forEach((wrapper) => {
    const content = wrapper.querySelector("p");
    const icon = wrapper.querySelector("i");
    const clickArea = wrapper.querySelector(".cursor-pointer");
    content.style.display = "none";
    icon.className =
      "fa-solid fa-plus absolute lg:top-6 top-6 right-5 lg:text-2xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E95FF] to-[#7F5CFF]";
    clickArea.addEventListener("click", () => {
      const isOpen = content.style.display === "block";
      if (isOpen) {
        content.style.display = "none";
        icon.classList.replace("fa-minus", "fa-plus");
        wrapper.style.background = "none";
        wrapper.style.backgroundColor = "#1F1E33";
      } else {
        content.style.display = "block";
        icon.classList.replace("fa-plus", "fa-minus");
        wrapper.style.background =
          "linear-gradient(90deg, #4E95FF 0%, #7F5CFF 100%)";
      }
    });
  });
});

// dropdown
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("scale-95");
  menu.classList.toggle("pointer-events-none");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
  }
});

