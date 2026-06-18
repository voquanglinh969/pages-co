export default function CheckoutSummary({
  itemCount,
  subtotal,
  onCheckout,
  disabled,
}) {
  return (
    <aside className="checkout-summary">
      <h2 className="checkout-summary__title">Order summary</h2>
      <div className="checkout-summary__row">
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          Subtotal{" "}
          <small data-checkout-subtotal-count>
            ({itemCount} item{itemCount === 1 ? "" : "s"})
          </small>
        </div>
        <strong data-checkout-subtotal>{subtotal}</strong>
      </div>
      <div className="checkout-summary__row">
        <span>Shipping</span>
        <strong>Free</strong>
      </div>
      <div className="checkout-summary__total">
        <span style={{ fontWeight: "bold" }}>Total</span>
        <strong data-checkout-total>{subtotal}</strong>
      </div>
      <button
        type="button"
        className="checkout-summary__button"
        data-checkout-button
        disabled={disabled}
        onClick={onCheckout}
      >
        Checkout
      </button>
      <p className="checkout-summary__note">
        You&apos;ll be asked to sign in to complete your order.
      </p>
    </aside>
  );
}
