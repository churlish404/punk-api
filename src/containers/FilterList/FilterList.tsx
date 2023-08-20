import Filter from "../../components/Filter/Filter";
import "./FilterList.scss";

const FilterList = () => {
  const filterLabels = [
    "High ABV ( > 6% )",
    "Classic Range",
    "Acidic (ph < 4)",
    "Gluten Free",
  ];
  const filterJSX = filterLabels.map((label) => (
    <Filter key={label} label={label} />
  ));

  return <div className="filterList">{filterJSX}</div>;
};

export default FilterList;
