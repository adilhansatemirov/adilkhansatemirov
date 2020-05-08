export default ({ card }) => {
  const styles = card.imagePosition ? { objectPosition: card.imagePosition } : null;

  return (
    <div className="card">
      <div className="card__image-container">
        <img style={styles} src={`/images/${card.image}`} alt="card image" className="card__image" />
      </div>
      <div className="card__info-container">
        <h4 className="card__title">{card.title}</h4>
        <div className="card__time">{card.time}</div>
        <p dangerouslySetInnerHTML={{ __html: card.description }} className="card__description"></p>
      </div>
    </div>
  );
};
