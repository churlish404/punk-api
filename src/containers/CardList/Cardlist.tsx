import "./Cardlist.scss";
import Card from "../../components/Card/Card";
import { Beer } from "../../types/beer";

type CardListProps = {
  beers: Beer[];
};

const Cardlist = ({ beers }: CardListProps) => {
  const cardsJSX = beers.map((beer, index) => {
    beer.name.length > 30
      ? (beer.name = `${beer.name.substring(0, 25)}`)
      : beer.name;

    beer.description.length > 250
      ? (beer.description = `${beer.description.substring(0, 220)}...`)
      : beer.description;

    return (
      <Card
        key={index}
        id={beer.id}
        name={beer.name}
        tagline={beer.tagline}
        firstBrewed={beer.first_brewed}
        image={beer.image_url}
        abv={beer.abv}
        ibu={beer.ibu}
        description={beer.description}
        beers={beers}
      />
    );
  });

  return <div className="cards">{cardsJSX}</div>;
};

export default Cardlist;
