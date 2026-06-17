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
          <Features />
        </div>
      </section>
    </main>
  );
}
