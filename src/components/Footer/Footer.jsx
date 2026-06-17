import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>P</span>
            <h3>Pages & Co.</h3>
          </div>

          <p>
            An independent bookshop for readers who like to take their time.
            Open since 1998.
          </p>

          <div className="footer__socials">
            <a href="#">
              <FaInstagram size={16} />
            </a>
            <a href="#">
              <FaTwitter size={16} />
            </a>
            <a href="#">
              <FaFacebook size={16} />
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4>SHOP</h4>

          <a href="#">New arrivals</a>
          <a href="#">Bestsellers</a>
          <a href="#">Fiction</a>
          <a href="#">Children</a>
          <a href="#">Gift cards</a>
        </div>

        <div className="footer__links">
          <h4>ABOUT</h4>

          <a href="#">Our story</a>
          <a href="#">Events</a>
          <a href="#">Visit the shop</a>
          <a href="#">Journal</a>
        </div>

        <div className="footer__links">
          <h4>HELP</h4>

          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer__newsletter">
          <h4>THE READING ROOM</h4>

          <p>One handpicked recommendation in your inbox each week.</p>

          <form>
            <input type="email" placeholder="Email address" />

            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Pages & Co. · Privacy · Terms</p>

        <span>Free shipping on orders over $35</span>
      </div>
    </footer>
  );
}
