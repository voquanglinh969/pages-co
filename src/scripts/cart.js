const CART_KEY = "pages-co-cart";

function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function setCartItems(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("pages-co-cart:update"));
}

function addToCart(item) {
  const cart = getCartItems();
  const existingIndex = cart.findIndex((cartItem) => cartItem.slug === item.slug);

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  setCartItems(cart);
}

function updateCartItemQuantity(slug, quantity) {
  const cart = getCartItems();
  const nextQuantity = Number(quantity);

  const nextCart = cart
    .map((item) => (item.slug === slug ? { ...item, quantity: nextQuantity } : item))
    .filter((item) => item.quantity > 0);

  setCartItems(nextCart);
}

function removeCartItem(slug) {
  const cart = getCartItems().filter((item) => item.slug !== slug);
  setCartItems(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("pages-co-cart:update"));
}

function getCartCount() {
  return getCartItems().reduce((total, item) => total + item.quantity, 0);
}

export { addToCart, clearCart, getCartCount, getCartItems, removeCartItem, updateCartItemQuantity };
