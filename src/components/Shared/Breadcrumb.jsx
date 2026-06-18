export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => (
          <li key={item.label} className="breadcrumb__item">
            {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
            {index < items.length - 1 ? <span className="breadcrumb__separator">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
