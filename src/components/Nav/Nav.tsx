import "./Nav.scss";
import "../SearchBar/SearchBar";
import SearchBar from "../SearchBar/SearchBar";
import FilterList from "../../containers/FilterList/FilterList";
import {
  useState,
  ChangeEventHandler,
  ChangeEvent,
  MouseEventHandler,
} from "react";

type NavProps = {
  handleSearchInput: ChangeEventHandler<HTMLInputElement>;
  applyFilters: MouseEventHandler<HTMLButtonElement>;
};

const Nav = ({ handleSearchInput, applyFilters }: NavProps) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const [isAbvChecked, setIsAbvChecked] = useState<boolean>(false);
  const [isClassicChecked, setIsClassicChecked] = useState<boolean>(false);
  const [isSourChecked, setIsSourChecked] = useState<boolean>(false);

  const toggleFilter = () => {
    setShowNav(!showNav);
  };

  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const checkedFilter = event.target;
    checkedFilter.previousSibling!.textContent?.includes("ABV")
      ? setIsAbvChecked(!isAbvChecked)
      : checkedFilter.previousSibling!.textContent?.includes("Classic")
      ? setIsClassicChecked(!isClassicChecked)
      : checkedFilter.previousSibling!.textContent?.includes("Sour")
      ? setIsSourChecked(!isSourChecked)
      : null;
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
            onClick={applyFilters}
          >
            Apply filters
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
