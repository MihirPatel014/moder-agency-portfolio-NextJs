import Image, { StaticImageData } from 'next/image';

// Import images directly if they're outside the public folder (if needed)
import picture_1 from '../assests/picture_1.jpg';
import picture_2 from '../assests/picture_2.jpg';
import picture_3 from '../assests/picture_3.jpg';
import picture_4 from '../assests/picture_4.jpg';


const cardData: CardProps[] = [

  {
    id: 'card_1',
    title: "Social Media Management",
    description:
      "We create, manage, and grow your social media presence across all platforms to build engagement and drive sales.",
    imageUrl: picture_1,
  },
  {
    id: 'card_2',
    title: "Search Engine Optimization",
    description:
      "We optimize your website for search engines to ensure higher rankings, better visibility, and increased organic traffic.",
    imageUrl: picture_2,
  },
  {
    id: "card_3",
    title: "Content Marketing",
    description:
      "From compelling copywriting to high-quality visuals and videos, we craft content that resonates with your audience and converts.",
    imageUrl: picture_3,
  },
  {
    id: "card_4",
    title: "Paid Advertising",
    description:
      "Data-driven ad campaigns on platforms like Google, Facebook, Instagram, TikTok, and LinkedIn to maximize your ROI.",
    imageUrl: picture_4,
  },
  {
    id: "card_5",
    title: "Email & SMS Marketing",
    description:
      "Automated and personalized marketing strategies to boost customer retention and sales.",
    imageUrl: picture_4
  },
  {
    id: "card_6",
    title: "Website Development",
    description:
      "Optimized Shopify, WordPress, and custom websites that drive conversions and provide seamless user experiences.",
    imageUrl: picture_1
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
            height={500} // Specify height and width
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
