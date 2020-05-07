export default ({ card }) => (
  <div className="card">
    <div className="card__image-container">
      <img src={`/images/${card.image}`} alt="card image" className="card__image" />
    </div>
    <div className="card__info-container">
      <h4 className="card__title">{card.title}</h4>
      <span className="card__time">{card.time}</span>
      {/* <p className="card__description">{card.description}</p> */}
      <p className="card__description">I'm in fourth year of studies towards a bachelor's in <strong>Information Systems</strong> at Suleiman Demirel University.</p>
    </div>
  </div>
);
