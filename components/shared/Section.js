import Card from './Card';

export default ({ section }) => (
  <section className="container section" id={section.id}>
    <h3 className="section__title">{section.title}</h3>
    {section.cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </section>
);
