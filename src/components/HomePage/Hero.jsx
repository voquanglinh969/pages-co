import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Hero() {
  const cards = [
    {
      id: 1,
      collection: "staff favorites",
      title: "The shelves we keep coming back to",
      desc: "Our booksellers pick the titles they can't stop pressing into customer's hands.",
      color: "#5B8A6D",
    },
    {
      id: 2,    
      collection: "staff favorites",
      title: "Mystery",
      desc: "Unravel thrilling mysteries and secrets.",
      image: "SEARCH",
      color: "#647CAD",
    },
    {
      id: 3,
      collection: "staff favorites",
      title: "Sci-Fi",
      desc: "Journey through futuristic worlds.",
      image: "ROCKET",
      color: "#5B9296",
    },
    {
      id: 4,
      collection: "staff favorites",
      title: "Poetry",
      desc: "Experience beautiful verses and emotions.",
      image: "FEATHER",
      color: "#A05780",
    },
  ];

  return (
    <div className="hero">
      <div className="hero__viewport">
        <button
          type="button"
          className="hero__arrow hero__arrow--prev"
          data-hero-prev
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>

        <div className="hero__container" data-hero-container>
          {cards.map((card) => (
            <div
              key={card.id}
              className="hero__card"
              style={{ backgroundColor: card.color }}
            >
              <div className="hero__card-content">
                <h3 className="hero__card-collection">{card.collection}</h3>
                <h3 className="hero__card-title">{card.title}</h3>
                <p className="hero__card-desc">{card.desc}</p>
                <div className="hero__card-link">
                  <a href={`/books?category=${card.title.toLowerCase()}`}>
                    Browse bestsellers
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="hero__arrow hero__arrow--next"
          data-hero-next
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>

        <div className="hero__nav-container">
          <div className="hero__nav" data-hero-nav>
            {cards.map((_, index) => (
              <button
                key={index}
                className={`hero__nav-indicator ${index === 0 ? "active" : ""}`}
                type="button"
                data-hero-nav-index={index}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
