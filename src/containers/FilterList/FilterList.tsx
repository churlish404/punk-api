import Filter from "../../components/Filter/Filter";
import "./FilterList.scss";
import { ChangeEventHandler } from "react";

type FilterListProps = {
  isAbvChecked: boolean;
  isClassicChecked: boolean;
  isSourChecked: boolean;
  handleChecked: ChangeEventHandler<HTMLInputElement>;
};

const FilterList = ({
  handleChecked,
  isAbvChecked,
  isClassicChecked,
  isSourChecked,
}: FilterListProps) => {
  const filterLabels = ["High ABV ( > 6% )", "Classic Range", "Sour (ph < 4)"];

  const filterJSX = filterLabels.map((label, idx) => (
    <Filter
      isChecked={
        idx === 0
          ? isAbvChecked
          : idx === 1
          ? isClassicChecked
          : idx === 2
          ? isSourChecked
          : false
      }
      key={label}
      label={label}
      handleChecked={handleChecked}
    />
  ));

  return <div className="filterList">{filterJSX}</div>;
};

export default FilterList;
