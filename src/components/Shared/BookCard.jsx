import { FaStar } from "react-icons/fa";

export const BookCard = ({ item }) => {
  const tagClassName = item.tag
    ? `book-card__tag book-card__tag--${item.tag.toLowerCase().replace(/\s+/g, "-")}`
    : "";

  return (
    <div className="book-card__container">
      <div className="book-card__content">
        <div
          className="book-card__image"
          style={{ backgroundColor: item.color }}
        >
          {item.tag ? <div className={tagClassName}>{item.tag}</div> : null}
          <div className="book-card__image-footer">
            <h3 className="book-card__title book-card__title--image">
              {item.title}
            </h3>
            <p className="book-card__author book-card__author--image">
              {item.author}
            </p>
          </div>
        </div>
        <div className="book-card__info">
          <h3 className="book-card__title">{item.title}</h3>
          <p className="book-card__author">{item.author}</p>
          <div className="book-card__details">
            <div className="book-card__price">
              <p>${item.price}</p>
              <p>${item.pricebefore}</p>
            </div>
            <div className="book-card__rating">
              <FaStar color="#ff9500" />
              <p>{item.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
