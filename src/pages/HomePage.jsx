import Hero from "../components/HomePage/Hero";
import Features from "../components/HomePage/Features";

export default function HomePage() {
  return (
    <main>
      <section className="section container">
        <Hero />
      </section>

      <section className="features section">
        <div className="container">
          <div className="section__eyebrow">Why Pages & Co.</div>
          <h2 className="section__title">What we offer</h2>
          <Features />
        </div>
      </section>
    </main>
  );
}
