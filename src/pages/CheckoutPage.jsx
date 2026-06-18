import Breadcrumb from "../components/Shared/Breadcrumb";
import CheckoutList from "../components/Checkout/CheckoutList";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import { renderToStaticMarkup } from "react-dom/server";
import {
  clearCart,
  getCartItems,
  removeCartItem,
  updateCartItemQuantity,
} from "../scripts/cart";
import { showLoading, showToast } from "../scripts/ui-feedback";
import "../styles/checkout.css";

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

function getSubtotal(cart) {
  return cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
}

function syncCheckoutUI() {
  const cart = getCartItems();
  const subtotal = getSubtotal(cart);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const itemsHost = document.querySelector("[data-checkout-items]");
  const subtotalNode = document.querySelector("[data-checkout-subtotal]");
  const totalNode = document.querySelector("[data-checkout-total]");
  const button = document.querySelector("[data-checkout-button]");
  const subtotalCountNode = document.querySelector(
    "[data-checkout-subtotal-count]"
  );

  if (!itemsHost || !subtotalNode || !totalNode || !button)
    return;

  itemsHost.innerHTML = renderToStaticMarkup(<CheckoutList cart={cart} />);
  subtotalNode.textContent = formatPrice(subtotal);
  totalNode.textContent = formatPrice(subtotal);

  if (subtotalCountNode) {
    subtotalCountNode.textContent = `${itemCount} item${itemCount === 1 ? "" : "s"}`;
  }

  button.disabled = cart.length === 0;
}

function initCheckoutSync() {
  if (window.__checkoutSyncBound) return;
  window.__checkoutSyncBound = true;
  window.addEventListener("pages-co-cart:update", syncCheckoutUI);
}

function bindCheckoutActions() {
  if (window.__checkoutActionsBound) return;
  window.__checkoutActionsBound = true;

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) return;

    const increaseSlug = target
      .closest("[data-cart-increase]")
      ?.getAttribute("data-cart-increase");
    const decreaseSlug = target
      .closest("[data-cart-decrease]")
      ?.getAttribute("data-cart-decrease");
    const removeSlug = target
      .closest("[data-cart-remove]")
      ?.getAttribute("data-cart-remove");

    if (increaseSlug) {
      const item = getCartItems().find(
        (cartItem) => cartItem.slug === increaseSlug
      );
      if (item) updateCartItemQuantity(increaseSlug, item.quantity + 1);
      return;
    }

    if (decreaseSlug) {
      const item = getCartItems().find(
        (cartItem) => cartItem.slug === decreaseSlug
      );
      if (item) updateCartItemQuantity(decreaseSlug, item.quantity - 1);
      return;
    }

    if (removeSlug) {
      removeCartItem(removeSlug);
    }
  });
}

export default function CheckoutPage() {
  initCheckoutSync();
  bindCheckoutActions();

  const cart = getCartItems();
  const subtotal = getSubtotal(cart);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotalText = formatPrice(subtotal);

  const handleCheckout = async (event) => {
    const button = event.currentTarget;
    await showLoading(button, "Processing...", 900);
    clearCart();
    syncCheckoutUI();
    showToast("Order placed successfully");
  };

  return (
    <main className="section container checkout-page">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Bag" }]} />

      <h1 className="section__title">Your bag</h1>

      <div className="checkout-layout">
        <section className="checkout-panel">
          <div data-checkout-items>
            <CheckoutList cart={cart} />
          </div>
        </section>

        <CheckoutSummary
          itemCount={itemCount}
          subtotal={subtotalText}
          onCheckout={handleCheckout}
          disabled={cart.length === 0}
        />
      </div>
    </main>
  );
}
