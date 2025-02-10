import Image ,{StaticImageData}from 'next/image';

// Import images directly if they're outside the public folder (if needed)
import picture_1 from '../assests/picture_1.jpg';
import picture_2 from '../assests/picture_2.jpg';
import picture_3 from '../assests/picture_3.jpg';
import picture_4 from '../assests/picture_4.jpg';

interface CardData {
  id: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

const cardData: CardData[] = [
  {
    id: 'card_1',
    title: 'Web Development',
    description: 'Build stunning websites and web applications with modern technologies.',
    imageUrl: picture_1, // Image imported from public/assets
  },
  {
    id: 'card_2',
    title: 'Marketing',
    description: 'Reach your audience effectively with digital marketing strategies.',
    imageUrl: picture_2,
  },
  {
    id: 'card_3',
    title: 'SEO',
    description: 'Boost your online presence with expert SEO services and strategies.',
    imageUrl: picture_3,
  },
  {
    id: 'card_4',
    title: 'Branding',
    description: 'Create a unique identity for your business with professional branding.',
    imageUrl: picture_4,
  },
];

interface CardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

function Card({ id, title, description, imageUrl }: CardProps) {
  return (
    <li className="card" id={id}>
      <div className="card__content">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            <a href="#top" className="btn btn--accent">
              Read more
            </a>
          </p>
        </div>
        <figure>
          <Image
            src={imageUrl}
            alt={title} // Use title for better alt text
            width={500} // Specify width and height
            height={300} // Specify height and width
          />
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
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </ul>
    </main>
  );
}

export default Services;
