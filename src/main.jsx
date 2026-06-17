import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/homepage.css";
import { initLoginModal } from "./scripts/login-modal.js";
import { initHomeHero } from "./scripts/home-hero.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Initialize modal after React renders (with small delay to ensure DOM is ready)
setTimeout(() => {
  initLoginModal();
  initHomeHero();
}, 100);
