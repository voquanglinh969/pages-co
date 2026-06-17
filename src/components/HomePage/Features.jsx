export default function Features() {
  const features = [
    {
      id: 1,
      title: "Curated Collections",
      desc: "Hand-picked books across genres by our editorial team.",
    },
    {
      id: 2,
      title: "Fast Shipping",
      desc: "Get your books quickly with trusted carriers.",
    },
    {
      id: 3,
      title: "Member Discounts",
      desc: "Exclusive deals and early access for members.",
    },
  ];

  return (
    <div className="features">
      <div className="features__grid">
        {features.map((f) => (
          <div key={f.id} className="feature">
            <h3 className="feature__title">{f.title}</h3>
            <p className="feature__desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
