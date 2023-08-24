import "./Cardlist.scss";
import Card from "../../components/Card/Card";
import { Beer } from "../../types/beer";

type CardListProps = {
  beers: Beer[];
};

const Cardlist = ({ beers }: CardListProps) => {
  const cardsJSX = beers.map((beer, index) => {
    if (beer.description.length > 200) {
      beer.description = `${beer.description.substring(0, 199)}...`;
    }

    return (
      <Card
        key={index}
        name={beer.name}
        tagline={beer.tagline}
        firstBrewed={beer.first_brewed}
        image={beer.image_url}
        abv={beer.abv}
        ibu={beer.ibu}
        description={beer.description}
      />
    );
  });

  return <div className="cards">{cardsJSX}</div>;
};

export default Cardlist;
