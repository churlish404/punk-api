import "./Filter.scss";

type FilterProps = {
  label: string;
};

const Filter = ({ label }: FilterProps) => {
  return (
    <div className="filter">
      <label className="filter__label">{label}</label>
      <input className="filter__input" type="checkbox" />
    </div>
  );
};

export default Filter;
