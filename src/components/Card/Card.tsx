import "./Card.scss";
import { Beer } from "../../types/beer";
import { Link } from "react-router-dom";

type CardProps = {
  name: string;
  id: number;
  tagline: string;
  firstBrewed: string;
  image: string;
  abv: number;
  ibu: number;
  description: string;
  beers: Beer[];
};

const Card = ({
  name,
  id,
  tagline,
  firstBrewed,
  image,
  abv,
  ibu,
  description,
}: CardProps) => {
  return (
    <div className="card">
      <div className="card__headers">
        <h2 className="card__heading">{name}</h2>
        <p>ABV: {abv}%</p>
        <p>IBU: {ibu}</p>
      </div>
      <div className="card__secondaryInfo">
        <p className="card__tagline">{tagline}</p>
        <p>created: {firstBrewed}</p>
      </div>
      <div className="card__image-wrapper">
        <img
          className={`${
            image === "https://images.punkapi.com/v2/keg.png" ? "keg" : ""
          } card__image image`}
          src={image}
          alt="beer image"
        />
      </div>
      <div className="card__detail">
        <p>{description}</p>
        <div className="card__link-wrapper">
          <img
            className="card__link--food"
            src="../../../public/assets/images/lunch_dining_FILL0_wght400_GRAD0_opsz48.svg"
            alt="food pairing link"
          />
          <Link to={`/${id}`} key={id}>
            <img
              className="card__link--brewing"
              src="../../../public/assets/images/sports_bar_FILL0_wght400_GRAD0_opsz48.svg"
              alt="brewers-corner link"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
