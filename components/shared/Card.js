export default ({ card }) => {
  const styles = card.imagePosition ? { objectPosition: card.imagePosition } : null;

  return (
    <div className="card">
      <div className="card__image-container">
        <img style={styles} src={`/images/${card.image}`} alt="card image" className="card__image" />
      </div>
      <div className="card__info-container">
        <h4 className="card__title">
          {card.link ? (
            <a href={card.link} target="_blank" rel="noopener" className="link card__title-link">
              <span className="card__title-text">{card.title}</span>
              <img className="card__title-image" src="/images/icons/link.svg" alt="link" />
            </a>
          ) : (
            <span>{card.title}</span>
          )}
        </h4>
        <div className="card__time">{card.time}</div>
        <p dangerouslySetInnerHTML={{ __html: card.description }} className="card__description"></p>
      </div>
    </div>
  );
};
