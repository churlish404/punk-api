import "./Card.scss";

type CardProps = {
  name: string;
  tagline: string;
  image: string;
  abv: number;
};

const Card = ({ name, tagline, image, abv }: CardProps) => {
  return (
    <div className="card">
      <div className="card__image-wrapper image">
        {" "}
        <img
          className="card__image image"
          src={image}
          alt={`image of ${name}`}
        />
      </div>

      <div className="card__text">
        <h2 className="card__heading">{name}</h2>
        <p>{tagline}</p>
        <p>{abv}%</p>
      </div>
    </div>
  );
};

export default Card;
