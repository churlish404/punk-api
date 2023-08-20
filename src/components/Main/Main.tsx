import "./Main.scss";
import beers from "../../data/beers";
import FilterList from "../../containers/FilterList/FilterList";
import Cardlist from "../../containers/CardList/Cardlist";
const Main = () => {
  return (
    <div className="main-content">
      <Cardlist beers={beers} />
    </div>
  );
};

export default Main;
