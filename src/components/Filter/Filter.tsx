import "./Filter.scss";
import { ChangeEventHandler } from "react";

type FilterProps = {
  label: string;
  isChecked: boolean;
  handleChecked: ChangeEventHandler<HTMLInputElement>;
};

const Filter = ({ label, handleChecked }: FilterProps) => {
  return (
    <div className="filter">
      <label className="filter__label">{label}</label>
      <input
        className="filter__input"
        type="checkbox"
        onChange={handleChecked}
      />
    </div>
  );
};

export default Filter;
