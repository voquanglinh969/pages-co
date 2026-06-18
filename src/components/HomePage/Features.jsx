import { BookCard } from "../Shared/BookCard";
import FeatureSection from "./FeatureSection";
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
        <FeatureSection title="Find your Shelf" desc="Browse by Genre">
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
        </FeatureSection>

        <FeatureSection title="Editor's Picks" desc="Featured this month">
          <div className="feature__book">
            {editorsPicks.slice(0, 5).map((item) => (
              <BookCard
                key={item.id}
                item={{
                  title: item.title,
                  author: item.author,
                  price: item.price,
                  pricebefore: item.pricebefore,
                  rating: item.rating,
                  tag: item.tag,
                  color: item.coverColor,
                }}
              />
            ))}
          </div>
        </FeatureSection>

        <section className="section">
          <Promotion />
        </section>

        <FeatureSection title="Most Loved" desc="Best Sellers">
          <div className="feature__book">
            {mostLoved.slice(0, 5).map((item) => (
              <BookCard
                key={item.id}
                item={{
                  title: item.title,
                  author: item.author,
                  price: item.price,
                  pricebefore: item.pricebefore,
                  rating: item.rating,
                  tag: item.tag,
                  color: item.coverColor,
                  new: item.new,
                  bestSeller: item.bestSeller,
                }}
              />
            ))}
          </div>
        </FeatureSection>

        <FeatureSection title="Hot Off The Press" desc="New Arrivals">
          <div className="feature__book">
            {hotOffThePress.slice(0, 5).map((item) => (
              <BookCard
                key={item.id}
                item={{
                  title: item.title,
                  author: item.author,
                  price: item.price,
                  pricebefore: item.pricebefore,
                  rating: item.rating,
                  tag: item.tag,
                  color: item.coverColor,
                }}
              />
            ))}
          </div>
        </FeatureSection>
      </div>
    </div>
  );
}
