import "./Cardlist.scss";
import Card from "../../components/Card/Card";
import { Beer } from "../../types/beer";

type CardListProps = {
  beers: Beer[];
};

const Cardlist = ({ beers }: CardListProps) => {
  const cardsJSX = beers.map((beer, index) => {
    return (
      <Card
        key={index}
        name={beer.name}
        tagline={beer.tagline}
        image={beer.image_url}
        abv={beer.abv}
      />
    );
  });

  return <div className="cards">{cardsJSX}</div>;
};

export default Cardlist;
