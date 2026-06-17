import { FiArrowRight } from "react-icons/fi";

export default function FeatureSection({ title, desc, children }) {
  return (
    <article className="feature feature--featured">
      <div className="feature__header">
        <div>
          <div className="section__eyebrow">{title}</div>
          <h2 className="section__title">{desc}</h2>
        </div>
        <a href="/" className="feature__view-all">
          <p>View all</p>
          <FiArrowRight size={20} />
        </a>
      </div>
      {children}
    </article>
  );
}
