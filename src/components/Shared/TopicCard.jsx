export const TopicCard = ({ item }) => {
  return (
    <div className="topic-card__container">
      <div
        className="topic-card__content"
        style={{ backgroundColor: item.color }}
      >
        <h3 className="topic-card__title">{item.title}</h3>
        <p className="topic-card__count">{item.count} titles</p>
      </div>
    </div>
  );
};
