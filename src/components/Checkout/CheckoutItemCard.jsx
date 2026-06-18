function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

export default function CheckoutItemCard({ item }) {
  return (
    <article className="checkout-item" data-cart-item={item.slug}>
      <div
        className="checkout-item__cover"
        style={{ backgroundColor: item.color }}
      />
      <div className="checkout-item__content">
        <div className="checkout-item__text">
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <button
            type="button"
            className="checkout-item__remove"
            data-cart-remove={item.slug}
          >
            Remove
          </button>
        </div>
        <div className="checkout-item__controls">
          <div className="checkout-qty" data-cart-qty-wrap={item.slug}>
            <button
              type="button"
              className="checkout-qty__button"
              data-cart-decrease={item.slug}
            >
              -
            </button>
            <span className="checkout-qty__value">{item.quantity}</span>
            <button
              type="button"
              className="checkout-qty__button"
              data-cart-increase={item.slug}
            >
              +
            </button>
          </div>
          <strong className="checkout-item__price">
            {formatPrice(Number(item.price) * item.quantity)}
          </strong>
        </div>
      </div>
    </article>
  );
}
