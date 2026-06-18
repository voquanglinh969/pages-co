import books from "../data/api-data/books.json";
import Breadcrumb from "../components/Shared/Breadcrumb";
import CatalogFilter from "../components/Shared/CatalogFilter";
import { BookCard } from "../components/Shared/BookCard";
import "../styles/bookspage.css";

export default function BooksPage() {
  const categories = [
    "All",
    "Fiction",
    "Mystery",
    "Sci-Fi",
    "Non-fiction",
    "Poetry",
    "Children",
    "Biography",
  ];

  return (
    <main className="section container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Books" }]} />
      <div className="books-page__header">
        <div>
          <h1 className="section__title">All books</h1>
          <p className="feature__desc feature__desc--lead">
            {books.length} titles in the collection
          </p>
        </div>
      </div>

      <CatalogFilter
        categories={categories}
        activeCategory="All"
        sortLabel="Featured"
      />
      <div
        style={{
          width: "100%",
          height: "0.5px",
          backgroundColor: "#d89b31",
          marginBottom: "20px",
        }}
      />
      <div className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            item={{
              slug: book.slug,
              title: book.title,
              author: book.author,
              price: book.price,
              pricebefore: book.pricebefore,
              rating: book.rating,
              tag: book.bestSeller ? "BESTSELLER" : book.new ? "NEW" : "",
              color: book.coverColor,
            }}
          />
        ))}
      </div>
    </main>
  );
}
