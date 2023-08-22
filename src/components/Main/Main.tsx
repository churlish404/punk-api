import "./Main.scss";
import Cardlist from "../../containers/CardList/Cardlist";
import { Beer } from "../../types/beer";

type MainProps = {
  beer: Beer[];
};

const Main = ({ beer }: MainProps) => {
  return (
    <div className="main-content">
      <Cardlist beers={beer} />
    </div>
  );
};

export default Main;
