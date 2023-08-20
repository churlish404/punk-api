import "./Nav.scss";
import "../SearchBar/SearchBar";
import SearchBar from "../SearchBar/SearchBar";
import FilterList from "../../containers/FilterList/FilterList";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleFilter = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <nav className="nav">
      <img
        className="nav__open image"
        src="../../../public/assets/images/menu_FILL0_wght400_GRAD0_opsz48.svg"
        alt="menu icon"
        onClick={toggleFilter}
      />
      <SearchBar />
      {showNav && (
        <div className="nav__filters">
          <img
            className="nav__filter-close image"
            src="../../../public/assets/images/close_FILL0_wght400_GRAD0_opsz48.svg"
            alt="close icon"
          />
          <FilterList />
          <button className="nav__filter-submit button" type="submit">
            Apply filters
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
