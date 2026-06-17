export default function LoginModal() {
  return (
    <div
      className="login-modal__overlay login-modal__hidden"
      aria-hidden="true"
    >
      <div
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        <div className="login-modal__header">
          <div className="login-modal__brand-avatar">P</div>
          <button
            type="button"
            className="login-modal__close"
            aria-label="Close login modal"
          >
            ×
          </button>
        </div>

        <div className="login-modal__hero">
          <h2 id="login-modal-title">Welcome back</h2>
          <p className="login-modal__subtitle">
            Enter your email and password to continue.
          </p>
        </div>

        <form className="login-modal__form">
          <label className="login-modal__label">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="login-modal__input"
            />
          </label>
          <label className="login-modal__label">
            Password
            <input
              type="password"
              placeholder="••••••••"
              required
              className="login-modal__input"
            />
          </label>
          <button type="submit" className="login-modal__submit">
            Continue
          </button>
        </form>

        <div className="login-modal__footer">
          <p>
            New here?{" "}
            <a href="/signup" className="login-modal__link">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
