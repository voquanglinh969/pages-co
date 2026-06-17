const CONTAINER_SELECTOR = "[data-hero-container]";
const NAV_SELECTOR = "[data-hero-nav]";
const PREV_SELECTOR = "[data-hero-prev]";
const NEXT_SELECTOR = "[data-hero-next]";
const ACTIVE_CLASS = "active";

function getCardStep(container) {
  const card = container.querySelector(".hero__card");
  if (!card) {
    return container.clientWidth;
  }

  const cardWidth = card.getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(container).gap || "0");
  return cardWidth + gap;
}

function setActiveIndicator(nav, activeIndex) {
  const buttons = nav.querySelectorAll("[data-hero-nav-index]");

  buttons.forEach((button, index) => {
    button.classList.toggle(ACTIVE_CLASS, index === activeIndex);
  });
}

function setArrowState(prevButton, nextButton, activeIndex, maxIndex) {
  prevButton.disabled = activeIndex <= 0;
  nextButton.disabled = activeIndex >= maxIndex;
}

function initHomeHero() {
  const container = document.querySelector(CONTAINER_SELECTOR);
  const prevButton = document.querySelector(PREV_SELECTOR);
  const nextButton = document.querySelector(NEXT_SELECTOR);
  const nav = document.querySelector(NAV_SELECTOR);

  if (!container || !nav || !prevButton || !nextButton) {
    return;
  }

  const buttons = nav.querySelectorAll("[data-hero-nav-index]");
  const maxIndex = buttons.length - 1;

  const scrollToIndex = (index) => {
    const nextIndex = Math.min(Math.max(index, 0), maxIndex);
    const step = getCardStep(container);
    container.scrollTo({
      left: nextIndex * step,
      behavior: "smooth",
    });
    setActiveIndicator(nav, nextIndex);
    setArrowState(prevButton, nextButton, nextIndex, maxIndex);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.heroNavIndex || 0);
      scrollToIndex(index);
    });
  });

  prevButton.addEventListener("click", () => {
    const step = getCardStep(container);
    const currentIndex = Math.round(container.scrollLeft / step);
    scrollToIndex(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    const step = getCardStep(container);
    const currentIndex = Math.round(container.scrollLeft / step);
    scrollToIndex(currentIndex + 1);
  });

  let scrollTimeout;
  container.addEventListener("scroll", () => {
    window.clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(() => {
      const step = getCardStep(container);
      const activeIndex = Math.max(
        0,
        Math.round(container.scrollLeft / step)
      );
      setActiveIndicator(nav, activeIndex);
      setArrowState(prevButton, nextButton, activeIndex, maxIndex);
    }, 50);
  });

  setActiveIndicator(nav, 0);
  setArrowState(prevButton, nextButton, 0, maxIndex);
}

export { initHomeHero };
