let toastTimerId = null;
let loadingTimerId = null;

function ensureToast() {
  let toast = document.querySelector("[data-global-toast]");

  if (!toast) {
    toast = document.createElement("div");
    toast.setAttribute("data-global-toast", "true");
    toast.className = "global-toast";
    document.body.appendChild(toast);
  }

  return toast;
}

function showToast(message, duration = 2200) {
  const toast = ensureToast();
  toast.textContent = message;
  toast.classList.add("global-toast--visible");

  if (toastTimerId) {
    window.clearTimeout(toastTimerId);
  }

  toastTimerId = window.setTimeout(() => {
    toast.classList.remove("global-toast--visible");
  }, duration);
}

function showLoading(button, label = "Processing...", duration = 900) {
  if (!button) return Promise.resolve();

  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = label;

  return new Promise((resolve) => {
    if (loadingTimerId) {
      window.clearTimeout(loadingTimerId);
    }

    loadingTimerId = window.setTimeout(() => {
      button.disabled = false;
      button.textContent = originalText;
      resolve();
    }, duration);
  });
}

export { showLoading, showToast };
