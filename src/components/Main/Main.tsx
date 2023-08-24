import Cardlist from "../../containers/CardList/Cardlist";
import { Beer } from "../../types/beer";

type MainProps = {
  beer: Beer[];
};

const Main = ({ beer }: MainProps) => {
  return (
    <div>
      <Cardlist beers={beer} />
    </div>
  );
};

export default Main;
