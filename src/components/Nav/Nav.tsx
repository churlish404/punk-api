import "./Nav.scss";
import "../SearchBar/SearchBar";
import SearchBar from "../SearchBar/SearchBar";
import FilterList from "../../containers/FilterList/FilterList";
import { useState, ChangeEventHandler, MouseEventHandler } from "react";

type NavProps = {
  handleSearchInput: ChangeEventHandler<HTMLInputElement>;
  handleChecked: ChangeEventHandler<HTMLInputElement>;
  applyFilter: MouseEventHandler<HTMLButtonElement>;
  isAbvChecked: boolean;
  isClassicChecked: boolean;
  isSourChecked: boolean;
  // applyFilters: MouseEventHandler<HTMLButtonElement>;
};

const Nav = ({
  handleSearchInput,
  handleChecked,
  applyFilter,
  isAbvChecked,
  isClassicChecked,
  isSourChecked,
}: NavProps) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleFilter = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      <img
        className="nav__open image"
        src="../../../public/assets/images/menu_FILL0_wght400_GRAD0_opsz48.svg"
        alt="menu icon"
        onClick={toggleFilter}
      />
      <SearchBar handleSearchInput={handleSearchInput} />
      {showNav && (
        <div className="nav__filters">
          <img
            className="nav__filter-close image"
            src="../../../public/assets/images/close_FILL0_wght400_GRAD0_opsz48.svg"
            alt="close icon"
            onClick={toggleFilter}
          />
          <FilterList
            isAbvChecked={isAbvChecked}
            isClassicChecked={isClassicChecked}
            isSourChecked={isSourChecked}
            handleChecked={handleChecked}
          />
          <button
            className="nav__filter-submit button"
            type="submit"
            onClick={applyFilter}
          >
            Apply filters
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
