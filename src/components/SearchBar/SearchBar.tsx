import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <label className="searchBar__label">Find your poison...</label>
      <input
        className="searchBar__input"
        type="text"
        placeholder="I'm feeling thirsty"
      />
    </div>
  );
};

export default SearchBar;
