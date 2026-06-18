export default function CatalogFilter({ categories, activeCategory, sortLabel }) {
  return (
    <div className="catalog-filter">
      <div className="catalog-filter__tabs" aria-label="Book categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`catalog-filter__tab ${
              category === activeCategory ? "is-active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="catalog-filter__sort">
        <label className="catalog-filter__label" htmlFor="catalog-sort">
          Sort by
        </label>
        <div className="catalog-filter__select-wrap">
          <select
            id="catalog-sort"
            className="catalog-filter__select"
            defaultValue={sortLabel}
          >
            <option value="Featured">Featured</option>
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
}
