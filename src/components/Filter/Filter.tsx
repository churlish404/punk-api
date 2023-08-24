import "./Filter.scss";
import { ChangeEventHandler } from "react";

type FilterProps = {
  label: string;
  key: string;
  isChecked: boolean;
  handleChecked: ChangeEventHandler<HTMLInputElement>;
};

const Filter = ({ label, handleChecked, isChecked }: FilterProps) => {
  return (
    <div className="filter">
      <label className="filter__label">{label}</label>
      <input
        className="filter__input"
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
      />
    </div>
  );
};

export default Filter;
