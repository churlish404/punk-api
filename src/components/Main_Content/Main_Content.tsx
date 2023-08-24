import Cardlist from "../../containers/CardList/Cardlist";
import { Beer } from "../../types/beer";

type MainProps = {
  beer: Beer[];
};

const Main_Content = ({ beer }: MainProps) => {
  return (
    <div className="main">
      <Cardlist beers={beer} />
    </div>
  );
};

export default Main_Content;
