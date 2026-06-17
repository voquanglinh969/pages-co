import { BookCard } from "../Shared/BookCard";
import FeatureCard from "./FeatureCard";
import Promotion from "./Promotion";
import books from "../../data/api-data/books.json";
import { TopicCard } from "../Shared/TopicCard";
import topics from "../../data/api-data/topics.json";

export default function Features() {
  const editorsPicks = books.filter((book) => book.featured);

  const mostLoved = books.filter((book) => book.mostLoved);

  const hotOffThePress = books.filter((book) => book.hotOffThePress);

  return (
    <div className="features">
      <div className="features__grid">
        <FeatureCard title="Find your Shelf" desc="Browse by Genre">
          <div className="feature__book feature__book--topics">
            {topics.map((item) => (
              <TopicCard
                key={item.id}
                item={{
                  title: item.title,
                  count: item.count,
                  color: item.color,
                }}
              />
            ))}
          </div>
        </FeatureCard>

        <FeatureCard title="Editor's Picks" desc="Featured this month">
          <div className="feature__book">
            {editorsPicks.slice(0, 4).map((item) => (
              <BookCard
                key={item.id}
                item={{
                  title: item.title,
                  author: item.author,
                  price: item.price,
                  pricebefore: item.pricebefore,
                  rating: item.rating,
                  tag: item.tag,
                  color: item.color,
                }}
              />
            ))}
          </div>
        </FeatureCard>

        <FeatureCard title="Most Loved" desc="Best Sellers">
          <div className="feature__book">
            {mostLoved.slice(0, 6).map((item) => (
              <BookCard
                key={item.id}
                item={{
                  title: item.title,
                  author: item.author,
                  price: item.price,
                  pricebefore: item.pricebefore,
                  rating: item.rating,
                  tag: item.tag,
                  color: item.color,
                  new: item.new,
                  bestSeller: item.bestSeller,
                }}
              />
            ))}
          </div>
        </FeatureCard>

        <section className="section">
          <Promotion />
        </section>

        <FeatureCard title="Hot Off The Press" desc="New Arrivals">
          <div className="feature__book">
            {hotOffThePress.slice(0, 4).map((item) => (
              <BookCard
                key={item.id}
                item={{
                  title: item.title,
                  author: item.author,
                  price: item.price,
                  pricebefore: item.pricebefore,
                  rating: item.rating,
                  tag: item.tag,
                  color: item.color,
                }}
              />
            ))}
          </div>
        </FeatureCard>

        <FeatureCard
          title="Featured this month"
          desc="Hand-picked books across genres by our editorial team."
        >
          <div className="feature__book">
            <BookCard
              item={{
                title: "A House of Borrowed Light",
                author: "Sofia Marchetti",
                price: "$17.25",
                pricebefore: "$22.00",
                rating: "4.5",
                tag: "BESTSELLER",
                color: "#7C67A0",
              }}
            />
          </div>
        </FeatureCard>
      </div>
    </div>
  );
}
