import Card from './Card';

export default ({ text }) => (
  <section className="container section">
    <h3 className="section__title">{text.title}</h3>
    {text.cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </section>
);
