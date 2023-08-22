import Filter from "../../components/Filter/Filter";
import "./FilterList.scss";
import { ChangeEventHandler } from "react";

type FilterListProps = {
  handleChecked: ChangeEventHandler<HTMLInputElement>;
};

const FilterList = ({ handleChecked }: FilterListProps) => {
  const filterLabels = [
    "High ABV ( > 6% )",
    "Classic Range",
    "Sour (ph < 4)",
    "Gluten Free",
  ];

  const filterJSX = filterLabels.map((label) => (
    <Filter key={label} label={label} handleChecked={handleChecked} />
  ));

  return <div className="filterList">{filterJSX}</div>;
};

export default FilterList;
