import books from "../data/api-data/books.json";
import Breadcrumb from "../components/Shared/Breadcrumb";
import { BookCard } from "../components/Shared/BookCard";
import { addToCart } from "../scripts/cart";
import { showToast } from "../scripts/ui-feedback";
import "../styles/bookdetail.css";

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

export default function BookDetailPage() {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  const book = books.find((item) => item.slug === slug) || books[0];
  const relatedBooks = books.filter((item) => item.slug !== book.slug).slice(0, 2);

  const handleAddToBag = () => {
    addToCart({
      slug: book.slug,
      title: book.title,
      author: book.author,
      price: book.price,
      pricebefore: book.pricebefore,
      rating: book.rating,
      tag: book.bestSeller ? "BESTSELLER" : book.new ? "NEW" : "",
      color: book.coverColor,
    });
    showToast(`${book.title} added to bag`);
  };

  return (
    <main className="section container book-detail">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Books", href: "/books" },
          { label: book.title },
        ]}
      />

      <div className="book-detail__hero">
        <div
          className="book-detail__cover"
          style={{ backgroundColor: book.coverColor }}
        >
          <div className="book-detail__cover-title">{book.title}</div>
          <div className="book-detail__cover-author">{book.author}</div>
        </div>

        <div className="book-detail__content">
          <div className="book-detail__category">{book.category}</div>
          <h1 className="book-detail__title">{book.title}</h1>
          <div className="book-detail__author">by {book.author}</div>

          <div className="book-detail__meta">
            <span>★ {book.rating}</span>
            <span className="book-detail__dot" aria-hidden="true" />
            <span>{book.category}</span>
            <span className="book-detail__dot" aria-hidden="true" />
            <span>{book.bestSeller ? "Best seller" : "Standard edition"}</span>
          </div>

          <div className="book-detail__price">
            <span className="book-detail__price-current">{formatPrice(book.price)}</span>
            <span className="book-detail__price-old">{formatPrice(book.pricebefore)}</span>
          </div>

          <p className="book-detail__description">{book.description}</p>

          <div className="book-detail__actions">
            <button
              type="button"
              className="book-detail__button"
              onClick={handleAddToBag}
            >
              Add to bag — {formatPrice(book.price)}
            </button>
            <button type="button" className="book-detail__button book-detail__button--ghost">
              ♡ Wishlist
            </button>
          </div>

          <div className="book-detail__specs">
            <div>
              <span>Format</span>
              <strong>Paperback</strong>
            </div>
            <div>
              <span>Pages</span>
              <strong>312</strong>
            </div>
            <div>
              <span>Published</span>
              <strong>2023</strong>
            </div>
            <div>
              <span>Publisher</span>
              <strong>Harbor & Vale</strong>
            </div>
            <div>
              <span>Language</span>
              <strong>English</strong>
            </div>
            <div>
              <span>ISBN</span>
              <strong>978-1-23456-001-2</strong>
            </div>
          </div>
        </div>
      </div>

      <section className="book-detail__related">
        <h2 className="book-detail__related-title">You may also like</h2>
        <div className="book-detail__related-grid">
          {relatedBooks.map((item) => (
            <BookCard
              key={item.id}
              item={{
                slug: item.slug,
                title: item.title,
                author: item.author,
                price: item.price,
                pricebefore: item.pricebefore,
                rating: item.rating,
                tag: item.bestSeller ? "BESTSELLER" : item.new ? "NEW" : "",
                color: item.coverColor,
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
