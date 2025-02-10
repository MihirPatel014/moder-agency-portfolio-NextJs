interface CardData {
  id: string;
  title: string;
  imageUrl: string;
}

const cardData: CardData[] = [
  {
    id: 'card_1',
    title: 'Card One',
    imageUrl: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg',
  },
  {
    id: 'card_2',
    title: 'Card Two',
    imageUrl: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg',
  },
  {
    id: 'card_3',
    title: 'Card Three',
    imageUrl: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg',
  },
  {
    id: 'card_4',
    title: 'Card Four',
    imageUrl: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg',
  },
];

interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
}

function Card({ id, title, imageUrl }: CardProps) {
  return (
    <li className="card" id={id}>
      <div className="card__content">
        <div>
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            <a href="#top" className="btn btn--accent">
              Read more
            </a>
          </p>
        </div>
        <figure>
          <img src={imageUrl} alt="Image description" />
        </figure>
      </div>
    </li>
  );
}

const Services = () => {
  return (
    <main>

      <ul id="cards">
        {cardData.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </ul>
    </main>
  );
}

export default Services;
