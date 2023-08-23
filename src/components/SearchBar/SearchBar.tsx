import "./SearchBar.scss";
import { ChangeEventHandler } from "react";

type SearchBarProps = {
  handleSearchInput: ChangeEventHandler<HTMLInputElement>;
};

const SearchBar = ({ handleSearchInput }: SearchBarProps) => {
  return (
    <div className="searchBar">
      <label className="searchBar__label">Find your poison...</label>
      <input
        className="searchBar__input"
        type="text"
        placeholder="I'm feeling thirsty"
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default SearchBar;
