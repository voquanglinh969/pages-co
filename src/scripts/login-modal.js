const OPEN_BUTTON_SELECTOR = ".js-login-open";
const OVERLAY_SELECTOR = ".login-modal__overlay";
const CLOSE_BUTTON_SELECTOR = ".login-modal__close";
const FORM_SELECTOR = ".login-modal__form";
const MODAL_VISIBLE_CLASS = "login-modal__is-open";
const HIDDEN_CLASS = "login-modal__hidden";

function openModal(overlay) {
  overlay.classList.remove(HIDDEN_CLASS);
  overlay.classList.add(MODAL_VISIBLE_CLASS);
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(overlay) {
  overlay.classList.add(HIDDEN_CLASS);
  overlay.classList.remove(MODAL_VISIBLE_CLASS);
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initLoginModal() {
  const overlay = document.querySelector(OVERLAY_SELECTOR);
  if (!overlay) {
    return;
  }

  const openButtons = Array.from(document.querySelectorAll(OPEN_BUTTON_SELECTOR));
  const closeButton = document.querySelector(CLOSE_BUTTON_SELECTOR);
  const form = document.querySelector(FORM_SELECTOR);
  const modal = overlay.querySelector(".login-modal");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(overlay));
  });

  if (closeButton) {
    closeButton.addEventListener("click", () => closeModal(overlay));
  }

  overlay.addEventListener("click", () => closeModal(overlay));

  if (modal) {
    modal.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.classList.contains(HIDDEN_CLASS)) {
      closeModal(overlay);
    }
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      closeModal(overlay);
    });
  }
}

export { initLoginModal };
