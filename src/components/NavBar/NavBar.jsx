import navbarItems from "../../data/navbar-data/navbar.json";
import "./NavBar.css";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__brand">
          <div className="navbar__logo">P</div>
          <span className="navbar__brand-text">Pages & Co.</span>
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__menu">
            {navbarItems.map((item) => (
              <li key={item.id} className="navbar__item">
                <a href={item.path} className="navbar__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <div className="navbar__search">
            <span className="navbar__search-icon">
              <FiSearch color="#8d7c67" />
            </span>

            <input
              type="text"
              placeholder="Search books..."
              className="navbar__search-input"
            />
          </div>
          <button className="navbar__login">Sign in</button>
          <a href="/checkout" className="navbar__bag">
            Bag <span>0</span>
          </a>
        </div>
      </div>
    </header>
  );
}
