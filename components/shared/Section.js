import Card from './Card';

export default ({ section }) => (
  <section className="container section">
    <h3 className="section__title">{section.title}</h3>
    {section.cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </section>
);
