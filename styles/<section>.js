<section>
  {allCards.map((card) => (
    <Card key={card.id} {...card} />
  ))}
</section>