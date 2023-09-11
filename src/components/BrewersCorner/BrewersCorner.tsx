import "./BrewersCorner.scss";
import { Beer } from "../../types/beer";
import { useParams, Link } from "react-router-dom";

type BrewersCornerProps = {
  beers: Beer[];
};

const BrewersCorner = ({ beers }: BrewersCornerProps) => {
  const { beerId } = useParams();

  const beer = beers.find((beer) => beer.id == (beerId as unknown as number));

  if (beer === undefined) {
    return <p> Couldn't find beer</p>;
  }

  console.log(beer?.description);
  return (
    <div className="brewerInfo">
      <h1 className="brewerInfo__heading">{beer!.name}</h1>

      <div className="brewerInfo__image-wrapper">
        <img
          className="brewerInfo__image"
          src={beer!.image_url ?? undefined}
          alt="beer image"
        />
      </div>
      <p className="brewerInfo__description">{beer.description} </p>
      <aside className="brewerInfo__tip">
        <div className="brewerInfo__tipIconWrapper">
          <img
            className="brewerInfo__icon"
            src="../../../public/assets/images/sports_bar_FILL0_wght400_GRAD0_opsz48.svg"
            alt="question mark"
          />
        </div>
        <p className="brewerInfo__tip-text">Top Tip: {beer.brewers_tips}</p>
      </aside>
      <table className="brewerInfo__table">
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Mash Temp</td>
          <td>{beer.method.mash_temp[0].temp.value}°C</td>
        </tr>
        <tr>
          <td>Fermentation Temp</td>
          <td>{beer.method.fermentation.temp.value}°C</td>
        </tr>
        <tr>
          <td>Yeast</td>
          <td>{beer.ingredients.yeast}</td>
        </tr>
        <tr>
          <td>Hops</td>
          <td>{beer.ingredients.hops.map((hop) => hop.name).join(", ")}</td>
        </tr>
        <tr>
          <td>Malt</td>
          <td>{beer.ingredients.malt.map((malt) => malt.name).join(", ")}</td>
        </tr>
      </table>
      <Link to={"/"}>
        <img
          src="../../../public/assets/images/close_FILL0_wght400_GRAD0_opsz48.svg"
          alt="exit cross"
          className="brewerInfo__exit"
        />
      </Link>
    </div>
  );
};

export default BrewersCorner;
