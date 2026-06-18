import CheckoutItemCard from "./CheckoutItemCard";

export default function CheckoutList({ cart }) {
  if (cart.length === 0) {
    return <p className="checkout-empty">Your bag is empty.</p>;
  }

  return (
    <div className="checkout-items">
      {cart.map((item) => (
        <CheckoutItemCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
