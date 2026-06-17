const HUGO_LINKS = {
  contact: "",
  media: "",
  legalization: "",
  business: "",
  partnerships: "",
  telegram: "",
  instagram: "",
  facebook: "",
  tiktok: "",
  youtube: ""
};

const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function applyEditableLinks() {
  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const url = HUGO_LINKS[key];

    if (url) {
      element.href = url;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
      return;
    }

    element.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Посилання ще не додано. Відредагуйте HUGO_LINKS у script.js.");
    });
  });
}

applyEditableLinks();
